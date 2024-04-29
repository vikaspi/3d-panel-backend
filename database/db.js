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

// Associate models
UserWorkspace.associate = (models) => {
    // Define associations here
    UserWorkspace.belongsTo(models.User, { foreignKey: 'user_id' });
};

db.sequelize.sync({ force: false }).then(() => {
    console.log('yes re-sync done!')
})

module.exports = { db };