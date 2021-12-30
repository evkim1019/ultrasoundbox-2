const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Category = db.define('category', {
  title: {
    type: Sequelize.ENUM('cardiothoracic', 'renal', 'efast', 'ruq')
  },
})

module.exports = Category