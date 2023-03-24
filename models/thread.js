const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Thread extends Model {}

Thread.init(
{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    thread : {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    counter_offer: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: "id",
        },
    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "thread",
}
);

module.exports = Thread;