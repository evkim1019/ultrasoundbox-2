//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Category = require('./models/Category')
const { CardioBlock, RenalBlock, EfastBlock, RuqBlock } = require('./models/Block')
const Take = require('./models/Take')

const seedData = require('./seedData');

//associations could go here!
Category.hasMany(CardioBlock);
CardioBlock.belongsTo(Category);
Category.hasMany(RenalBlock);
RenalBlock.belongsTo(Category);
Category.hasMany(EfastBlock);
EfastBlock.belongsTo(Category);
Category.hasMany(RuqBlock);
RuqBlock.belongsTo(Category);


Take.belongsTo(CardioBlock);
CardioBlock.hasMany(Take);
Take.belongsTo(RenalBlock);
RenalBlock.hasMany(Take);
Take.belongsTo(User);
User.hasMany(Take);

const seedDB = async () => {
  await db.sync({ force: true });
  await seedData();
}

module.exports = {
  db,
  seedDB,
  models: {
    User,
    CardioBlock,
    RenalBlock,
    EfastBlock,
    RuqBlock,
    Category,
    Take,
  },
}
