require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('licointerface', 'root', process.env.MYSQL_PASSWORD, {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate()
.then( () => {
    console.log('Conectado!');
})
.catch( err => {
    console.log(err);
})