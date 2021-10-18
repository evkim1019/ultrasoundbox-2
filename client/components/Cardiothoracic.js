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
class Cardiothoracic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardioTakes: []
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
  }



  render() {
    console.log('PROPS, STATE', this.props, this.state)
    return (
      <div className="content-box" id="home">
        <div className="content-headline">
          <h1>Cardiothoracic</h1>
          <p>A cardiothoracic surgeon is a specialist who operates on the heart, lungs and other thoracic (chest) organs. As well as performing surgery, they also diagnose and treat diseases of these organs.</p>
        </div>

        <div className="toggle-content-wrapper">
          <div>
            {this.props.cardiothoracic.map((block, idx) =>
              <div key={idx}>
                <Link to={`/cardiothoracic/${idx}`}>Block {idx + 1}</Link>
                {this.state.cardioTakes.filter(take => take.cardioblockId === block.id).length > 0 ?
                  <p className="smallnote">
                    You took this {this.state.cardioTakes.filter(take => take.cardioblockId === block.id)[0].count} times<br />
                  Your best score is {this.state.cardioTakes.filter(take => take.cardioblockId === block.id)[0].score}%
                </p>
                  :
                  <p className="smallnote">
                    You haven't took this block
                    No best score yet
                </p>
                }
                <br /><br />
                <Link to={`/cardiothoracic/${idx}`} className="button">Take test</Link>
                <br /><br />
              </div>
            )}
          </div>
        </div>
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
    name: state.auth.name,
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


export default connect(mapState, mapDispatchToProps)(Cardiothoracic)
