const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const PdfData = sequelize.define("pdfData", {
        pdf_data_id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false,
        },
        ai_employee_id: {
            type: DataTypes.INTEGER,
        },
        pdf_data:{
            type: DataTypes.STRING,
        },
        pdf_path:{
            type: DataTypes.STRING,
        },
        title:{
            type: DataTypes.STRING,
        }

        //  by deafult it adds timestamps createdAt and updatedAt
    },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'pdfData'
        });

    return PdfData;
}