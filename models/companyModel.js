const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define("company", {
        company_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
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
            type: DataTypes.ARRAY,
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

        Company.beforeCreate(company => company.company_id = uuid);

    return User;
}