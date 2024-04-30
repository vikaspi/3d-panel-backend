const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define("company", {
        company_id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        services: {
            type: DataTypes.STRING,
        },
        employees: {
            type: DataTypes.STRING,
        },
        customer_service_employees: {
            type: DataTypes.STRING,
        },
        website: {
            type: DataTypes.STRING,
        },
        customer_help_question: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        }
        //  by deafult it adds timestamps createdAt and updatedAt
    },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'company'
        });

    return Company;
}