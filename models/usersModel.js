const uuid = require('uuid');
// Define model
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        user_id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        open_api_key: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        profile_photo: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        sso_token: {
            type: DataTypes.STRING,
        },
        company_name: {
            type: DataTypes.STRING,
        },
        is_admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        steps: {
            type: DataTypes.SMALLINT,
            defaultValue: 0
        }
        //  by deafult it adds timestamps createdAt and updatedAt
    },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'user'
        });

    User.beforeCreate(user => user.user_id = uuid());

    return User;
}