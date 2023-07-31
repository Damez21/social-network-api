// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config folder
const sequelize = require("../config/connection");

// Initialize Recipe model by extending off Sequelize's Model Class
class Thought extends Model {}

Thought.init(
  {
    // define columns for Thought model
 
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reactions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Thought_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Thought",
  }
);

// Export Recipe
module.exports = Thought;

