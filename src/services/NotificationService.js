const userService = require('./UserService');
const alertService = require('./AlertService');
const scrapeService = require('./ScrapeService');
const mailService = require('./MailService');

async function run() {
    const alerts = await alertService.getAlerts();
    alerts.forEach(async alert => {
        let scrapedCars = await scrapeService.scrape(alert);
        let existingCars = alert.cars;
        let newCars = scrapedCars.filter(newCar => !existingCars.some(existingCar => existingCar.id === newCar.id))
            .filter(car => car !== undefined);
        if (newCars && newCars.length) {
            notifyUser(alert, newCars)
                .catch((err) => console.log(`Unable to notify user: ${err}`));
            updateExistingCars(alert, newCars)
                .catch((err) => console.log(`Unable to update existing cars: ${err}`));
        } else {
            console.log(`No new cars for alert id: ${alert.id}`);
        }
    });
}

const updateExistingCars = async (alert, newCars) => {
    let newAlert = alert;
    newAlert.cars = newCars;
    alertService.updateAlert(alert.id,newAlert);
    console.log(`Updated alert ${alert.id} with new ${newCars.length} cars`);
};
const notifyUser = async (alert, newCars) => {
    let user = await userService.getByUsername(alert.username);
    mailService.sendMail(user, alert, newCars);
    console.log(`Going to send mail to user ${user.email} with ${newCars.length} cars`);
};

module.exports = {
    run
};
