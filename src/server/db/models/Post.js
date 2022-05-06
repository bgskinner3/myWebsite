const Sequelize = require('sequelize');
const db = require('../db');

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  image: {
    type: Sequelize.STRING,
  },
  subject: {
    type: Sequelize.STRING,
  },
});

module.exports = { Post };
