const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/connection");

class Votes extends Model {}

Votes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    upvote: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    downvote: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "votes",
  }
);

module.exports = Votes;
