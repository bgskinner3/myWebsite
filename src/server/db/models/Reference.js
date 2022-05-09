const Sequelize = require('sequelize');
const db = require('../db');

const Referance = db.define('referance', {
  url: {
    type: Sequelize.STRING
  },
});

module.exports = { Referance };
