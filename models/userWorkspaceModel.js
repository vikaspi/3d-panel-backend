// Define model
module.exports = (sequelize, DataTypes) => {
    const UserWorkspace = sequelize.define("user_workspace", {
        user_workspace_id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull:false,
        },
        workspace_id: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        workspace_name: {
            type: DataTypes.STRING,
        },
        owner_id: {
            type: DataTypes.STRING,
        },
        flow_ns: {
            type: DataTypes.STRING,
        }
        //  by deafult it adds timestamps createdAt and updatedAt
    },
        {
            // disable the modification of tablenames; By default, sequelize will automatically
            // transform all passed model names (first parameter of define) into plural.
            // if you don't want that, set the following
            freezeTableName: true,
            tableName: 'user_workspace'
        });

    return UserWorkspace;
}