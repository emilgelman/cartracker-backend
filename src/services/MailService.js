const config = require('../config');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.mailUser,
        pass: config.mailPassword
    }
});
const sendMail = async (user, alert, newCars) => {
    let html = `<html><head><style>table.blueTable {
  border: 1px solid #1C6EA4;
  background-color: #EEEEEE;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
}
table.blueTable td, table.blueTable th {
  border: 1px solid #AAAAAA;
  padding: 3px 2px;
}
table.blueTable tbody td {
  font-size: 13px;
}
table.blueTable tr:nth-child(even) {
  background: #D0E4F5;
}
table.blueTable thead {
  background: #1C6EA4;
  background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
  background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
  background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
  border-bottom: 2px solid #444444;
}
table.blueTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #FFFFFF;
  border-left: 2px solid #D0E4F5;
}
table.blueTable thead th:first-child {
  border-left: none;
}
table.blueTable tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  background: #D0E4F5;
  background: -moz-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  background: -webkit-linear-gradient(top, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  background: linear-gradient(to bottom, #dcebf7 0%, #d4e6f6 66%, #D0E4F5 100%);
  border-top: 2px solid #444444;
}
table.blueTable tfoot td {
  font-size: 14px;
}
table.blueTable tfoot .links {
  text-align: right;
}
table.blueTable tfoot .links a{
  display: inline-block;
  background: #1C6EA4;
  color: #FFFFFF;
  padding: 2px 8px;
  border-radius: 5px;
}</style></head><body>`;
    let table = '<table class="blueTable"><thead><tr><th> יצרן</th><th> דגם</th><th> שנה</th><th> מחיר</th><th> יד</th><th> קמ</th> <th> מנוע</th> <th> קישור</th> </tr> </thead><tbody>';
    let body = newCars.map(car => `<tr><td>${alert.manufacturer_text}</td><td>${alert.model_text}</td><td>${car.year}</td><td>${car.price}</td><td>${car.hand}</td><td>${car.km}</td><td>${car.engineval}</td><td><a href="http://www.yad2.co.il/item/${car.id}">link</a></td></tr>`).join('');
    table += body;
    table += '</table>';

    html += table;
    html += '</body></html>';
    let message = {
        from: 'cartracker.alerts@gmail.com', // Sender address
        to: user.email,         // List of recipients
        subject: `${alert.manufacturer_text} - ${alert.model_text} | נוספו רכבים חדשים`,// Subject line
        html: html
    };
    transporter.sendMail(message, function (err, info) {
        if(err)
            console.log(err);
        else
            console.log(info);
    });
    // transport.sendMail(message, function(err, info) {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log(info);
    //     }
    // });
};

module.exports = {
    sendMail
};
