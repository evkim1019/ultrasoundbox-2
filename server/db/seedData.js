const db = require('./db');
const User = require('./models/User');
const Category = require('./models/Category');
const { CardioBlock, RenalBlock, EfastBlock, RuqBlock } = require('./models/Block');
const Take = require('./models/Take');

const userList = require('./seeds/userSeed');
const categoryList = require('./seeds/categorySeed');
const cardioBlockList = require('./seeds/cardioBlockSeed');
const renalBlockList = require('./seeds/renalBlockSeed');
const efastBlockList = require('./seeds/efastBlockSeed');
const ruqBlockList = require('./seeds/ruqBlockSeed');
const takeList = require('./seeds/takeSeed');


const seedData = async () => {

  // Each user
  for (let i = 0; i < userList.length; i++) {
    const user = userList[i]
    await User.create({
      username: user.username,
      fullName: user.fullName,
      password: user.password,
      isAdmin: user.isAdmin,
    })
  }

  // Each category
  for (let i = 0; i < categoryList.length; i++) {
    const category = categoryList[i];
    await Category.create({
      title: category.title,
    })
  }

  // Cardio
  for (let i = 0; i < cardioBlockList.length; i++) {
    const block = cardioBlockList[i];
    let qtypeList = []
    let questionList = []
    let optionsList = []
    let answerList = []
    let explainList = []
    for (let j = 0; j < block.questionInfo.length; j++) {
      await qtypeList.push(cardioBlockList[i].questionInfo[j].qtype)
      await questionList.push(cardioBlockList[i].questionInfo[j].question)
      await optionsList.push(cardioBlockList[i].questionInfo[j].options)
      await answerList.push(cardioBlockList[i].questionInfo[j].answer)
      await explainList.push(cardioBlockList[i].questionInfo[j].explain)
    }
    await CardioBlock.create({
      categoryId: block.categoryId,
      props: block.props,
      usviews: block.usviews,
      qtype: qtypeList,
      questions: questionList,
      options: optionsList,
      answers: answerList,
      explain: explainList,
      interpretation: block.interpretation,
    })
  }

  // Renal
  for (let i = 0; i < renalBlockList.length; i++) {
    const block = renalBlockList[i];
    let qtypeList = []
    let questionList = []
    let optionsList = []
    let answerList = []
    let explainList = []
    for (let j = 0; j < block.questionInfo.length; j++) {
      await qtypeList.push(renalBlockList[i].questionInfo[j].qtype)
      await questionList.push(renalBlockList[i].questionInfo[j].question)
      await optionsList.push(renalBlockList[i].questionInfo[j].options)
      await answerList.push(renalBlockList[i].questionInfo[j].answer)
      await explainList.push(renalBlockList[i].questionInfo[j].explain)
    }
    await RenalBlock.create({
      categoryId: block.categoryId,
      props: block.props,
      qtype: qtypeList,
      questions: questionList,
      options: optionsList,
      answers: answerList,
      explain: explainList,
      interpretation: block.interpretation,
    })
  }

  // Efast
  for (let i = 0; i < efastBlockList.length; i++) {
    const block = efastBlockList[i];
    let qtypeList = []
    let questionList = []
    let optionsList = []
    let answerList = []
    let explainList = []
    for (let j = 0; j < block.questionInfo.length; j++) {
      await qtypeList.push(efastBlockList[i].questionInfo[j].qtype)
      await questionList.push(efastBlockList[i].questionInfo[j].question)
      await optionsList.push(efastBlockList[i].questionInfo[j].options)
      await answerList.push(efastBlockList[i].questionInfo[j].answer)
      await explainList.push(efastBlockList[i].questionInfo[j].explain)
    }
    await EfastBlock.create({
      categoryId: block.categoryId,
      props: block.props,
      qtype: qtypeList,
      questions: questionList,
      options: optionsList,
      answers: answerList,
      explain: explainList,
      interpretation: block.interpretation,
    })
  }

  // ruq
  for (let i = 0; i < ruqBlockList.length; i++) {
    const block = ruqBlockList[i];
    let qtypeList = []
    let questionList = []
    let optionsList = []
    let answerList = []
    let explainList = []
    for (let j = 0; j < block.questionInfo.length; j++) {
      await qtypeList.push(ruqBlockList[i].questionInfo[j].qtype)
      await questionList.push(ruqBlockList[i].questionInfo[j].question)
      await optionsList.push(ruqBlockList[i].questionInfo[j].options)
      await answerList.push(ruqBlockList[i].questionInfo[j].answer)
      await explainList.push(ruqBlockList[i].questionInfo[j].explain)
    }
    await RuqBlock.create({
      categoryId: block.categoryId,
      props: block.props,
      qtype: qtypeList,
      questions: questionList,
      options: optionsList,
      answers: answerList,
      explain: explainList,
      interpretation: block.interpretation,
    })
  }


  // Take
  for (let i = 0; i < takeList.length; i++) {
    const take = takeList[i]
    await Take.create({
      // date: [],
      // processtime: take.processtime,
      wrong: take.wrong,
      score: take.score,
      count: take.count,
      cardioblockId: take.cardioblockId,
      renalblockId: take.renalblockId,
      efastblockId: take.efastblockId,
      ruqblockId: take.ruqblockId,
      userId: take.userId,
    })
  }
}

module.exports = seedData;