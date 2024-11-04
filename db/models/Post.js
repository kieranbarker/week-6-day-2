const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connection.js");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Post;
