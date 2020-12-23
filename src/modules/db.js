require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize('licointerface', 'root', process.env.MYSQL_PASSWORD, {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate()
.then( () => {
    console.log('Conect!');
})
.catch( err => {
    console.log(err);
});

class Database {
    //////////////////////////////////////
    // CREATE TABLE:
    static table(){ 
        const Groups = sequelize.define('groupCommandsAndLinks', {
            link: {
                type: Sequelize.STRING
            },
            commands: {
                type: Sequelize.STRING
            },
            groupId: {
                type: Sequelize.STRING
            }
        });
        // Groups.sync( { force: true } ); // Criar / substituir uma table;
        return Groups;
    }
    //////////////////////////////////////
    // ADD NEW ITEM TO THE DATABASE:
    static async addItem(linkGroup, cmds){
        const dataGroups =  await this.dataTable();
        let linkExists = false;
        
        dataGroups.forEach( data => {
            if(data === linkGroup)
                linkExists = true;
        });
        
        if(linkExists === true)
            return true;

        const Groups = await this.table();
        Groups.create( {
            link: `${linkGroup}`,
            commands: `${cmds}`,
            groupId: 'false'
        })
    }
    //////////////////////////////////////
    // VIEW ALL DATAS IN TABLE:
    static async dataTable(){
        const groups = await this.table();
        const allData = await groups.findAll(); 
        let links = new Array();
        allData.forEach( data => {
            links.push(data.dataValues.link);
        })
        return links;
    }
}

module.exports = Database;