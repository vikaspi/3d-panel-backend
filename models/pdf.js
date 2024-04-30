const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const PdfData = sequelize.define("pdfData", {
        pdf_data_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        ai_employee_id: {
            type: DataTypes.UUID,
        },
        pdf_data:{
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

    PdfData.beforeCreate(pdfData => pdfData.pdf_data_id = uuid());
    console.log(PdfData);
    return PdfData;
}