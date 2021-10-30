import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  getCardioBlocks,
  getRenalBlocks,
  getEfastBlocks,
  getRuqBlocks
} from '../store/blocks'
import { getTakes } from '../store/takes'
/**
 * COMPONENT
 */
class MyTestHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardioAvg: 0,
      renalAvg: 0,
      efastAvg: 0,
      ruqAvg: 0
    }
  }

  async componentDidMount() {
    await this.props.getCardioBlocks();
    await this.props.getRenalBlocks();
    await this.props.getEfastBlocks();
    await this.props.getRuqBlocks();
    await this.props.getTakes();

    const allTakes = this.props.takes.filter(take => take.userId === this.props.userid)
    this.setState({ takes: allTakes })
    this.setState({ cardioTakes: allTakes.filter(take => take.cardioblockId !== null) })
    this.setState({ renalTakes: allTakes.filter(take => take.renalblockId !== null) })
    this.setState({ efastTakes: allTakes.filter(take => take.efastblockId !== null) })
    this.setState({ ruqTakes: allTakes.filter(take => take.ruqblockId !== null) })

    this.setState({
      cardioAvg:
        allTakes.filter(take => take.cardioblockId !== null).length > 0 ?
          allTakes.filter(take => take.cardioblockId !== null)
            .map(take => take.score)
            .reduce((acc, curr) => acc += curr) / allTakes.filter(take => take.cardioblockId !== null).length
              .toFixed(2)
          : 0
    })
    this.setState({
      renalAvg:
        allTakes.filter(take => take.renalblockId !== null).length > 0 ?
          allTakes.filter(take => take.renalblockId !== null)
            .map(take => take.score)
            .reduce((acc, curr) => acc += curr) / allTakes.filter(take => take.renalblockId !== null).length
              .toFixed(2)
          : 0
    })
    this.setState({
      efastAvg:
        allTakes.filter(take => take.efastblockId !== null).length > 0 ?
          allTakes.filter(take => take.efastblockId !== null)
            .map(take => take.score)
            .reduce((acc, curr) => acc += curr) / allTakes.filter(take => take.efastblockId !== null).length
              .toFixed(2)
          : 0
    })
    this.setState({
      ruqAvg:
        allTakes.filter(take => take.ruqblockId !== null).length > 0 ?
          allTakes.filter(take => take.ruqblockId !== null)
            .map(take => take.score)
            .reduce((acc, curr) => acc += curr) / allTakes.filter(take => take.ruqblockId !== null).length
              .toFixed(2)
          : 0
    })
  }

  render() {
    // console.log('STATE CHECK', this.state)

    const { cardioAvg, renalAvg, efastAvg, ruqAvg } = this.state;
    const totalAvg = Math.round((cardioAvg + renalAvg + efastAvg + ruqAvg) / 4)
    return (
      <div className="content-box" id="mytesthistory">
        <h3>{this.props.fullName}'s test history</h3>
        <div className="avg-wrapper">
          <div className="avg-total">
            <p>Total score average</p>
            <h1>{totalAvg}%</h1>
          </div>
          <div className="avg-categories">
            <div>
              <p><span className="smallnote">Average score of</span><br />Cardiothoracic</p>
              <h2>{cardioAvg.toFixed(2)}%</h2>
            </div>
            <div>
              <p><span className="smallnote">Average score of</span><br />Renal</p>
              <h2>{renalAvg.toFixed(2)}%</h2>
            </div>
            <div>
              <p><span className="smallnote">Average score of</span><br />EFAST</p>
              <h2>{efastAvg.toFixed(2)}%</h2>
            </div>
            <div>
              <p><span className="smallnote">Average score of</span><br />RUQ</p>
              <h2>{ruqAvg.toFixed(2)}%</h2>
            </div>
          </div>
        </div>

        {/* <div className="bestworst-scored-wrapper">
          <div>
            <h2>Scored Highest</h2>
            <ol>
              <li>here the list</li>
            </ol>
          </div>
          <div>
            <h2>Scored Lowest</h2>
            <ol>
              <li>here the list</li>
            </ol>
          </div>
        </div> */}

      </div>
    )
  }
}


/**
 * CONTAINER
 */
const mapState = state => {
  // console.log('MAPSTATE', state)
  return {
    userid: state.auth.id,
    username: state.auth.username,
    fullName: state.auth.fullName,
    cardiothoracic: state.cardiothoracic,
    renal: state.renal,
    efast: state.efast,
    ruq: state.ruq,
    takes: state.takes
  }
}

const mapDispatchToProps = {
  getCardioBlocks,
  getRenalBlocks,
  getEfastBlocks,
  getRuqBlocks,
  getTakes
}


export default connect(mapState, mapDispatchToProps)(MyTestHistory)
