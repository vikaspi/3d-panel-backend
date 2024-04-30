const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const Chatbot = sequelize.define("chatbot", {
        chatbot_id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false,
        },
        ai_employee_id: {
            type: DataTypes.INTEGER,
        },
        chatbot_name: {
            type: DataTypes.STRING,
        },
        chatbot_greeting_message: {
            type: DataTypes.STRING,
        },
        chatbot_persona: {
            type: DataTypes.STRING,
        },
        chatbot_jargon: {
            type: DataTypes.STRING,
        },
        chatbot_tone_of_voice: {
            type: DataTypes.STRING,
        },
        chatbot_speaks_as: {
            type: DataTypes.STRING,
        },
        chatbot_can_share_links: {
            type: DataTypes.BOOLEAN,
        },
        chatbot_can_use_emojis: {
            type: DataTypes.BOOLEAN,
        },
        chatbot_specific_terms: {
            type: DataTypes.STRING,
        },
        chatbot_main_purpose: {
            type: DataTypes.STRING,
        },
        //  by deafult it adds timestamps createdAt and updatedAt
    },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'chatbot'
        });

    return Chatbot;
}