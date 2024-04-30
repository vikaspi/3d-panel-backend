const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const Analytics = sequelize.define("analytics", {
        analytics_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        user_id: {
            type: DataTypes.UUID,
        },
        ai_employee_id: {
            type: DataTypes.UUID,
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

        Analytics.beforeCreate(analytics => analytics.analytics_id = uuid());

    return Analytics;
}