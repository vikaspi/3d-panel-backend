const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const UserApps = sequelize.define("user_app", {
        user_app_id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        app_name:{
            type: DataTypes.STRING,
        },
        app_id:{
            type: DataTypes.STRING,
        },
        active:{
            type: DataTypes.STRING,
        },
        user_key:{
            type: DataTypes.STRING,
        },
        is_deleted:{
            type: DataTypes.BOOLEAN,
        },

        //  by deafult it adds timestamps createdAt and updatedAt
    },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'user_app'
        });

    return UserApps;
}