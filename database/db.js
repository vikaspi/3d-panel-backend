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

db.users = require('../models/usersModel.js')(sequelize, DataTypes);
db.userWorkspace = require('../models/userWorkspaceModel.js')(sequelize, DataTypes);
db.aiEmployees = require('../models/aiEmployeesModel.js')(sequelize, DataTypes);
db.chatbot = require('../models/chatbotModel.js')(sequelize, DataTypes);
db.manualData = require('../models/manualsModel.js')(sequelize, DataTypes);
db.summarisedData = require('../models/summarisedDataModel.js')(sequelize, DataTypes);
db.userApps = require('../models/userAppsModel.js')(sequelize, DataTypes);
db.analytics = require('../models/analyticsModel.js')(sequelize, DataTypes);

db.users.hasMany(db.userWorkspace,{foreignKey:"user_id"});
db.userWorkspace.hasOne(db.users,{foreignKey:"user_id"});

db.aiEmployees.hasOne(db.chatbot,{foreignKey:"ai_employee_id"});

db.aiEmployees.hasOne(db.manualData, { foreignKey: 'ai_employee_id' });
db.aiEmployees.hasOne(db.summarisedData, { foreignKey: 'ai_employee_id'});

db.users.hasMany(db.userApps,{foreignKey:"user_id"});
db.users.hasMany(db.analytics,{foreignKey:"user_id"});
db.aiEmployees.hasMany(db.analytics,{foreignKey:"ai_employee_id"});

db.sequelize.sync({ alter: true }).then(() => {      // force:false production
    console.log('yes re-sync done!')
})

module.exports = { db };

