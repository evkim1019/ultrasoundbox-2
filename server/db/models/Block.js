const { INTEGER } = require('sequelize')
const Sequelize = require('sequelize')
const db = require('../db')

const CardioBlock = db.define('cardioblock', {
  props: {
    type: Sequelize.TEXT
  },
  qtype: {
    type: Sequelize.ARRAY(Sequelize.ENUM('reading', 'general'))
  },
  questions: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  options: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  answers: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  explain: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
})

const RenalBlock = db.define('renalblock', {
  props: {
    type: Sequelize.TEXT
  },
  qtype: {
    type: Sequelize.ARRAY(Sequelize.ENUM('reading', 'general'))
  },
  questions: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  options: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  answers: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  explain: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
})

const EfastBlock = db.define('efastblock', {
  props: {
    type: Sequelize.TEXT
  },
  qtype: {
    type: Sequelize.ARRAY(Sequelize.ENUM('reading', 'general'))
  },
  questions: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  options: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  answers: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  explain: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
})

const RuqBlock = db.define('ruqblock', {
  props: {
    type: Sequelize.TEXT
  },
  qtype: {
    type: Sequelize.ARRAY(Sequelize.ENUM('reading', 'general'))
  },
  questions: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  options: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  answers: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  explain: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
})

module.exports = { CardioBlock, RenalBlock, EfastBlock, RuqBlock }