const userService = require('./UserService');
async function run()
{
      const users = await userService.getUsers();
      console.log(users);
}


module.exports = {
    run
};
