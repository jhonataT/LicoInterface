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
});

class Database {
    static table(){ // createTable;
        const Grupos = sequelize.define('groupCommandsAndLinks', {
            link: {
                type: Sequelize.STRING
            },
            commands: {
                type: Sequelize.STRING
            }
        });
        // Grupos.sync( { force: true } ); // Criar / substituir uma table;
        return Grupos;
    }

    static async addItem(linkGroup, cmds){
        const Grupos = await this.table();
        Grupos.create( {
            link: `${linkGroup}`,
            commands: `${cmds}`
        })
    }
}

module.exports = Database;