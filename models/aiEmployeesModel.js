const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const AIEmployees = sequelize.define("ai_employee", {
        ai_employee_id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false,
        },
        workspace_id: {
            type: DataTypes.INTEGER,
        },
        template_id: {
            type: DataTypes.INTEGER,
        },
        purpose_code: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        remarks: {
            type: DataTypes.STRING,
        }
        //  by deafult it adds timestamps createdAt and updatedAt
    },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'ai_employee'
        });

    return AIEmployees;
}