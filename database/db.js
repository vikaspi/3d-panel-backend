const { Sequelize, DataTypes } = require('sequelize');
const { DATABASE_NAME,
        DATABASE_USERNAME,
        DATABASE_PASSWORD,
        DATABASE_SCHEMA
    } = require('../config/config');

const sequelize = new Sequelize(
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    {
        host: 'localhost',
        dialect: 'postgres',
        // By default schema is public, we can change it here 
        schema: DATABASE_SCHEMA

    }
);


// create connection
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});


// Query

const db = {};
db.sequelize = sequelize;

db.users = require('../models/users.js')(sequelize, DataTypes);
db.userWorkspace = require('../models/userWorkspace.js')(sequelize, DataTypes);
db.aiEmployees = require('../models/aiEmployees.js')(sequelize, DataTypes);
db.chatbot = require('../models/chatbot.js')(sequelize, DataTypes);
db.manualData = require('../models/manuals.js')(sequelize, DataTypes);
db.pdfData= require('../models/pdf.js')(sequelize, DataTypes);


db.users.hasMany(db.userWorkspace,{foreignKey:"user_id"});
db.userWorkspace.hasOne(db.users,{foreignKey:"user_id"});

db.aiEmployees.hasOne(db.chatbot,{foreignKey:"ai_employee_id"});

db.aiEmployees.hasOne(db.manualData, { foreignKey: 'ai_employee_id' });

// const userInfo = {

//     user_id: 'ef8c695f-fdc6-489f-b999-319cef0fe09f',
//     workspace_name:'AVIjhghsa'
//     // first_name:'jhon'
//     };
// //   db.users.create(userInfo);
//    db.userWorkspace.create(userInfo);


//    include: [
//     {
//       model: Collection,
//       as: "item_collection",
//       required: false,
//       attributes: {
//         exclude: [
//           "smartcontract_address",
//           "is_deleted",
//           "created_at",
//           "updated_at",
//         ],
//       },



db.sequelize.sync({ force: false }).then(() => {   //alter:true -----
    console.log('yes re-sync done!')
})

module.exports = { db };

