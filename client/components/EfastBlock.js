import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { forEach } from '../../server/db/seeds/ruqBlockSeed';

import { getEfastBlocks } from '../store/blocks'
import { getTakes, createTake } from '../store/takes'
import CardiothoracicTorso from './CardiothoracicTorso'


/**
 * COMPONENT
 */
class EfastBlock extends Component {
  constructor(props) {
    super(props);


    this.state = {
      userId: this.props.userId,
      score: 0,
      countChosen: 0,
      activeSubmit: false,
      showExplain: false,
    }
    this.submitAnswer = this.submitAnswer.bind(this);
    this.collectChoices = this.collectChoices.bind(this);
  }

  async componentDidMount() {
    await this.props.getEfastBlocks();
    await this.props.getTakes();

    const thisBlock = this.props.efast.filter(block => block.id - 1 === parseInt(this.props.match.params.id))[0]

    const optionsToArray = [];
    const questionOptionsSet = []
    for (let i = 0; i < thisBlock.options.length; i++) {
      optionsToArray.push(thisBlock.options[i].split(', '))
      questionOptionsSet.push({
        qtype: thisBlock.qtype[i],
        question: thisBlock.questions[i],
        option: thisBlock.options[i].split(', ')
      })
    }

    this.setState({
      category: 'Efast',
      props: thisBlock.props,
      qtype: thisBlock.qtype,
      qtypeReading: thisBlock.qtype.filter(el => el === 'reading').length,
      questionList: thisBlock.questions,
      optionsList: optionsToArray,
      answer: thisBlock.answers,
      explain: thisBlock.explain,
      interpretation: thisBlock.interpretation,
      questionOptionsSet: questionOptionsSet,
      data: {
        userId: this.props.userId,
        cardioblockId: null,
        renalblockId: null,
        efastblockId: parseInt(this.props.match.params.id) + 1,
        ruqblockId: null,
        count: this.props.currentUserTakes.filter(take => take.efastblockId === parseInt(this.props.match.params.id) + 1).length,
        score: 0,
        wrong: []
      },
    })

  }

  // Active submit button once all Qs are answered
  collectChoices() {
    const countChosen = document.getElementById('question-wrapper').querySelectorAll('input[type="radio"]:checked')
    this.setState({ countChosen: countChosen.length });

    // if all question has all checked inputs
    if (countChosen.length === this.state.questionOptionsSet.length) {
      // Collect answers
      const chosen = [];
      const inputs = document.getElementById('question-wrapper').getElementsByTagName('input')
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) chosen.push(inputs[i].value * 1)
      }
      this.setState({ chosen: chosen })
      this.setState({ activeSubmit: true })
    }
  }


  async submitAnswer(ev) {
    // ev.preventDefault();
    this.setState({ showExplain: true })
    // Get score & mark correct and wrong
    const wrong = [];
    const correct = []
    const question = document.querySelectorAll('.question')

    for (let j = 0; j < question.length; j++) {
      if (this.state.answer[j] === this.state.chosen[j]) {
        correct.push({ [j + 1]: this.state.chosen[j] })
        question[j].classList.add('correct')
      } else {
        wrong.push({ [j + 1]: this.state.chosen[j] })
        question[j].classList.add('incorrect')
        let thisQuestionOptions = question[j].getElementsByTagName('div')
        thisQuestionOptions[this.state.answer[j] - 1].classList.add('correct-answer')
      }
    }
    const score = (correct.length / question.length).toFixed(2) * 100
    this.setState({ score: score });

    // show the score
    document.querySelector('#scoreboard').classList.remove('hidden');
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    window.scrollTo({ top: 0, behavior: 'smooth' })

    const inputs = document.getElementById('question-wrapper').getElementsByTagName('input')
    // submit disabled changing choices & submit button
    for (let node of inputs) { node.disabled = true; }
    document.querySelector('#submit').disabled = true;

    // add take result to the database
    this.setState({
      score: score,
      data: {
        userId: this.state.data.userId,
        cardioblockId: this.state.data.cardioblockId,
        renalblockId: this.state.data.renalblockId,
        efastblockId: this.state.data.efastblockId,
        ruqblockId: this.state.data.ruqblockId,
        score: score,
        count: this.state.data.count + 1,
        wrong: wrong,
      }
    })

    let currentTake = { score: score, wrong: wrong, count: 1, userId: this.props.userId, efastblockId: parseInt(this.props.match.params.id) + 1 }
    await this.props.createTake(currentTake)
  }


  render() {
    // console.log('PROPS & STATE ====> ', this.props, this.state)
    const questionOptionsSet = this.state.questionOptionsSet;

    const { data } = this.state;
    return (
      <div className="content-box" id="block">


        {/* Prop starts */}
        <div id="prop-box">
          <div id="scoreboard" className="hidden">
            <p>Your score is {this.state.score}%</p>
          </div>
          <p className="smallnote">EFAST / Block {this.props.match.params.id * 1 + 1}</p>
          <p>{this.state.props}</p>

          <CardiothoracicTorso thisBlockNum={parseInt(this.props.match.params.id) + 1} />
        </div>

        {/* Question starts */}
        <div id="question-wrapper">
          {questionOptionsSet && questionOptionsSet.map((set, idx) => {
            return (
              <div key={idx + 1}>
                {set.qtype === 'reading' ?
                <div className='qtype-reading'>
                  <div className="question">
                    <p>{idx + 1}. {set.question}</p>
                    {set.option.map((op, opidx) =>
                      <div key={opidx}>
                        <input type="radio" id={`${idx}_${op}`} name={idx + 1} value={opidx + 1} onClick={this.collectChoices} />
                        <label htmlFor={`${idx}_${op}`}>{opidx + 1}. {op}</label>
                      </div>
                    )}

                    {this.state.showExplain && this.state.explain[idx].length > 0 ?
                      <div className="explain">
                        <p>{this.state.explain[idx]}</p>
                      </div>
                      : null
                    }
                  </div>
                </div>
                : 
                null
                }
              </div>
            )
          })}

          {this.state.showExplain ? 
            <div className="readingInterpretation">
              <p><span>Answer</span><br />{this.state.interpretation ? this.state.interpretation[0] : null}</p>
              <p><span>Interpretation</span><br />{this.state.interpretation ? this.state.interpretation[1] : null}</p>
              <p><span>Impression</span><br />{this.state.interpretation ? this.state.interpretation[2] : null}</p>
            </div>
            :
            null
          }
          

          {questionOptionsSet && questionOptionsSet.map((set, idx) => {
            return (
              <div key={idx + 1}>
                {set.qtype === 'general' ? 
                <div className='qtype-general'>
                  <div className='question'>
                    <p>{idx + 1}. {set.question}</p>
                    {set.option.map((op, opidx) =>
                      <div key={opidx}>
                        <input type="radio" id={`${idx}_${op}`} name={idx + 1} value={opidx + 1} onClick={this.collectChoices} />
                        <label htmlFor={`${idx}_${op}`}>{opidx + 1}. {op}</label>
                      </div>
                    )}

                    {this.state.showExplain && this.state.explain[idx].length > 0 ?
                      <div className="explain">
                        <p>{this.state.explain[idx]}</p>
                      </div>
                      : null
                    }
                  </div>
                </div>
                : null
                }
              </div>
            )            
            
          }
          )}
        </div>
        <div className="submit-wrapper">
          {this.state.activeSubmit
            ? <button className="button" type="submit" id="submit" onClick={() => this.submitAnswer(this.state.data)} >Submit your answer</button>
            :
            <p><span className="smallnote">Please answer all quetions</span><br />
              <button className="button" type="submit" id="submit" onClick={this.submitAnswer} disabled>Submit your answer</button>
            </p>
          }
        </div>

        {/* Float button */}
        <div className="float-right-bottom">
          <div>
            {this.props.efast.map(block => block.id).includes(this.props.match.params.id * 1 + 2) ?
              <a onClick={() => { window.location.href = `/efast/${this.props.match.params.id * 1 + 1}` }}>Next Block</a>
              :
              <a className="lastBlock">Last Block</a>
            }
          </div>
        </div>
        {/* Float breadcrumb */}
        <div className="float-right-top">
          <p className="smallnote">EFAST / Block {this.props.match.params.id * 1 + 1}</p>
        </div>
      </div >
    )
  }
}


/**
 * CONTAINER
 */
const mapState = state => {
  console.log('MAPSTATE', state)
  return {
    userId: state.auth.id,
    username: state.auth.username,
    efast: state.efast,
    currentUserTakes: state.takes,
    newTake: ''
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEfastBlocks: () => dispatch(getEfastBlocks()),
    getTakes: () => dispatch(getTakes()),
    createTake: (take) => dispatch(createTake(take)),
  }
  // getCardioBlocks,
  //   getTakes,
  //   createTake
}


export default connect(mapState, mapDispatchToProps)(EfastBlock)
