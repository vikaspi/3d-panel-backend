const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const Analytics = sequelize.define("analytics", {
        analytics_id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        ai_employee_id: {
            type: DataTypes.INTEGER,
        },
        name:{
            type: DataTypes.STRING,
        },
        value:{
            type: DataTypes.STRING,
        },
        active:{
            type: DataTypes.STRING,
        },
        is_deleted:{
            type: DataTypes.BOOLEAN, // boolean
        },

        //  by deafult it adds timestamps createdAt and updatedAt
    },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'analytics'
        });

    return Analytics;
}