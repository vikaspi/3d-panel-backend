const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const SummarisedData = sequelize.define("summarisedData", {
        summarised_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        ai_employee_id: {
            type: DataTypes.UUID,
        },
        main_category:{
            type: DataTypes.STRING,
        },
        sub_category:{
            type: DataTypes.STRING,
        },
        type:{
            type: DataTypes.STRING,
        },
        value:{
            type: DataTypes.STRING,
        },

        //  by deafult it adds timestamps createdAt and updatedAt
    },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'summarisedData'
        });

    SummarisedData.beforeCreate(summarisedData => summarisedData.summarised_id = uuid());

    return SummarisedData;
}