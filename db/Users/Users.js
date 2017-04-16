const Sequelize = require('sequelize');
const db = require('../config.js');

let Users = db.define('Users', {
  first: Sequelize.STRING,
  last: Sequelize.STRING,
  phoneNumber: {type: Sequelize.STRING, unique: true},
  email: {type: Sequelize.STRING, unique: true},
  lat: Sequelize.STRING,
  long: Sequelize.STRING,
  incognito: {type: Sequelize.BOOLEAN, defaultValue: false},
  defaultPrivacy: {type: Sequelize.STRING, allowNull: false, defaultValue: 'label'},
  currentLabel: Sequelize.STRING,
});

Users.sync();

module.exports = Users;