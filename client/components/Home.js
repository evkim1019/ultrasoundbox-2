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
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showBlocks1: false,
      showBlocks2: false,
      showBlocks3: false,
      showBlocks4: false,
    }

    this.showBlock1 = this.showBlock1.bind(this);
    this.showBlock2 = this.showBlock2.bind(this);
    this.showBlock3 = this.showBlock3.bind(this);
    this.showBlock4 = this.showBlock4.bind(this);
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
  }

  showBlock1(ev) {
    ev.preventDefault();
    this.setState({
      showBlocks1: !this.state.showBlocks1,
      showBlocks2: false,
      showBlocks3: false,
      showBlocks4: false
    });
  }
  showBlock2(ev) {
    ev.preventDefault();
    this.setState({
      showBlocks1: false,
      showBlocks2: !this.state.showBlocks2,
      showBlocks3: false,
      showBlocks4: false
    });
  }
  showBlock3(ev) {
    ev.preventDefault();
    this.setState({
      showBlocks1: false,
      showBlocks2: false,
      showBlocks3: !this.state.showBlocks3,
      showBlocks4: false
    });
  }
  showBlock4(ev) {
    ev.preventDefault();
    this.setState({
      showBlocks1: false,
      showBlocks2: false,
      showBlocks3: false,
      showBlocks4: !this.state.showBlocks4
    });
  }



  render() {
    console.log('USER CHECK ===> ', this.props)
    return (
      <div className="content-box" id="home">
        <div className="probes-list">
          <p className="smallnote">PROTOTYPE VERSION 0.4</p><br />
          <img src="/img/probesList.png" alt="Probes Collection" />
          <p>Choose a category to pick a question block</p>
          <p className="smallnote">This is a prototype. For any bugs, typos, content errors, graphical errors or any other concerns, please email me using the contact link at the bottom.</p>
        </div>

        {/* Toggle buttons */}
        <div className="toggle-button-wrapper">
          <button onClick={this.showBlock1} className={this.state.showBlocks1 ? 'active button' : 'button'}>
            Cardiothoracic
          </button>
          <button onClick={this.showBlock2} className={this.state.showBlocks2 ? 'active button' : 'button'}>
            Renal
          </button>
          <button onClick={this.showBlock3} className={this.state.showBlocks3 ? 'active button' : 'button'}>
            EFAST
          </button>
          <button onClick={this.showBlock4} className={this.state.showBlocks4 ? 'active button' : 'button'}>
            RUQ
          </button>
        </div>

        {/* Toggle contents */}
        <div className="toggle-content-wrapper">
          {
            this.state.showBlocks1 ?
              <div>
                {this.props.cardiothoracic.map((block, idx) =>
                  <div key={idx}>
                    <Link to={`/cardiothoracic/${idx}`}>Block {idx + 1}</Link>
                    {this.state.cardioTakes.filter(take => take.cardioblockId === block.id).length > 0 ?
                      <p className="smallnote">
                        You took this {this.state.cardioTakes.filter(take => take.cardioblockId === block.id).length} times<br />
                        Your best score is {
                          this.state.cardioTakes.filter(take => take.cardioblockId === block.id)
                            .map(take => take.score).sort((a, b) => b - a)[0]
                        }%
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
              : null
          }
          {
            this.state.showBlocks2 ?
              <div>
                {this.props.renal.map((block, idx) =>
                  <div key={idx}>
                    <Link to={`/renal/${idx}`}>Block {idx + 1}</Link>
                    {this.state.renalTakes.filter(take => take.renalblockId === block.id).length > 0 ?
                      <p className="smallnote">
                        You took this {this.state.renalTakes.filter(take => take.renalblockId === block.id).length} times<br />
                        Your best score is {
                          this.state.renalTakes.filter(take => take.renalblockId === block.id)
                            .map(take => take.score).sort((a, b) => b - a)[0]
                        }%
                      </p>
                      :
                      <p className="smallnote">
                        You haven't took this block
                        No best score yet
                      </p>
                    }
                    <br /><br />
                    <Link to={`/renal/${idx}`} className="button">Take test</Link>
                    <br /><br />
                  </div>
                )}
              </div>
              : null
          }
          {
            this.state.showBlocks3 ?
              <div>
                {this.props.efast.map((block, idx) =>
                  <div key={idx}>
                    <Link to={`/efast/${idx}`}>Block {idx + 1}</Link>
                    {this.state.efastTakes.filter(take => take.efastblockId === block.id).length > 0 ?
                      <p className="smallnote">
                        You took this {this.state.efastTakes.filter(take => take.efastblockId === block.id).length} times<br />
                        Your best score is {
                          this.state.efastTakes.filter(take => take.efastblockId === block.id)
                            .map(take => take.score).sort((a, b) => b - a)[0]
                        }%
                      </p>
                      :
                      <p className="smallnote">
                        You haven't took this block
                        No best score yet
                      </p>
                    }
                    <br /><br />
                    <Link to={`/efast/${idx}`} className="button">Take test</Link>
                    <br /><br />
                  </div>
                )}
              </div>
              : null
          }
          {
            this.state.showBlocks4 ?
              <div>
                {this.props.ruq.map((block, idx) =>
                  <div key={idx}>
                    <Link to={`/ruq/${idx}`}>Block {idx + 1}</Link>
                    {this.state.ruqTakes.filter(take => take.ruqblockId === block.id).length > 0 ?
                      <p className="smallnote">
                        You took this {this.state.ruqTakes.filter(take => take.ruqblockId === block.id).length} times<br />
                        Your best score is {
                          this.state.ruqTakes.filter(take => take.ruqblockId === block.id)
                            .map(take => take.score).sort((a, b) => b - a)[0]
                        }%
                      </p>
                      :
                      <p className="smallnote">
                        You haven't took this block
                        No best score yet
                      </p>
                    }
                    <br /><br />
                    <Link to={`/ruq/${idx}`} className="button">Take test</Link>
                    <br /><br />
                  </div>
                )}
              </div>
              : null
          }
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
    isAdmin: state.auth.isAdmin,
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


export default connect(mapState, mapDispatchToProps)(Home)
