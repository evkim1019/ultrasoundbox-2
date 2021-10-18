const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const Take = db.define('take', {
  // date: {
  //   type: Sequelize.DATE,
  //   get() {
  //     return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
  //   }
  // },
  // processtime: {
  //   type: Sequelize.DATE,
  //   get() {
  //     return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
  //   }
  // },
  wrong: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  score: {
    type: Sequelize.INTEGER
  },
  count: {
    type: Sequelize.INTEGER
  },
})

module.exports = Take