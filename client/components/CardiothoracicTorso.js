import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCardioBlocks } from '../store/blocks'


/**
 * COMPONENT
 */
class CardiothoracicTorso extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view1: false,
      view2: false,
      view3: false,
      view4: false,
      view5: false,
      view6: false,
      view7: false,
      showAltBtn: false,
      viewAlt: false,
    }

    this.toggleView1 = this.toggleView1.bind(this);
    this.toggleView2 = this.toggleView2.bind(this);
    this.toggleView3 = this.toggleView3.bind(this);
    this.toggleView4 = this.toggleView4.bind(this);
    this.toggleView5 = this.toggleView5.bind(this);
    this.toggleView6 = this.toggleView6.bind(this);
    this.toggleView7 = this.toggleView7.bind(this);
    this.toggleViewAlt = this.toggleViewAlt.bind(this);
  }

  // async componentDidMount() {

  // }

  toggleView1() {
    this.setState({
      view1: !this.state.view1,
      view2: false,
      view3: false,
      view4: false,
      view5: false,
      view6: false,
      view7: false,
      showAltBtn: false,
      viewAlt: false,
    })
  }
  toggleView2() {
    this.setState({
      view1: false,
      view2: !this.state.view2,
      view3: false,
      view4: false,
      view5: false,
      view6: false,
      view7: false,
      showAltBtn: false,
      viewAlt: false,
    })
  }
  toggleView3() {
    this.setState({
      view1: false,
      view2: false,
      view3: !this.state.view3,
      view4: false,
      view5: false,
      view6: false,
      view7: false,
      showAltBtn: true,
      viewAlt: false,
    })
    if (this.state.view3 === true) {
      this.setState({ viewAlt: true })
    } else {
      this.setState({ viewAlt: false })
    }
  }
  toggleView4() {
    this.setState({
      view1: false,
      view2: false,
      view3: false,
      view4: !this.state.view4,
      view5: false,
      view6: false,
      view7: false,
      showAltBtn: false,
      viewAlt: false,
    })
  }
  toggleView5() {
    this.setState({
      view1: false,
      view2: false,
      view3: false,
      view4: false,
      view5: !this.state.view5,
      view6: false,
      view7: false,
      showAltBtn: false,
      viewAlt: false,
    })
  }
  toggleView6() {
    this.setState({
      view1: false,
      view2: false,
      view3: false,
      view4: false,
      view5: false,
      view6: !this.state.view6,
      view7: false,
      showAltBtn: false,
      viewAlt: false,
    })
  }
  toggleView7() {
    this.setState({
      view1: false,
      view2: false,
      view3: false,
      view4: false,
      view5: false,
      view6: false,
      view7: !this.state.view7,
      showAltBtn: false,
      viewAlt: false,
    })
  }
  toggleViewAlt() {
    this.setState({
      view1: false,
      view2: false,
      view3: false,
      view4: false,
      view5: false,
      view6: false,
      view7: false,
      showAltBtn: true,
      viewAlt: !this.state.viewAlt,
    })
    if (this.state.viewAlt === true) {
      this.setState({ view3: true })
    } else {
      this.setState({ view3: false })
    }
  }

  render() { 

    const thisTorso = this.props.cardiothoracic.filter(qGroup => qGroup.id === this.props.thisBlockNum)[0]
    // console.log('thisTorsothisTorsothisTorso', thisTorso)
    return (
      <div id="torso-box">
        <div id="torso-wrapper">
          <img src="/img/torso.jpg" />
          <div className={this.state.view1 === false ? "view-toggle view1-button" : "view-toggle view1-button view-toggle-selected"} onClick={this.toggleView1}></div>
          <div className={this.state.view2 === false ? "view-toggle view2-button" : "view-toggle view2-button view-toggle-selected"} onClick={this.toggleView2}></div>
          <div className={this.state.view3 === false ? "view-toggle view3-button" : "view-toggle view3-button view-toggle-selected"} onClick={this.toggleView3}></div>
          <div className={this.state.view4 === false ? "view-toggle view4-button" : "view-toggle view4-button view-toggle-selected"} onClick={this.toggleView4}></div>
          <div className={this.state.view5 === false ? "view-toggle view5-button" : "view-toggle view5-button view-toggle-selected"} onClick={this.toggleView5}></div>
          <div className={this.state.view6 === false ? "view-toggle view6-button" : "view-toggle view6-button view-toggle-selected"} onClick={this.toggleView6}></div>
          <div className={this.state.view7 === false ? "view-toggle view7-button" : "view-toggle view7-button view-toggle-selected"} onClick={this.toggleView7}></div>
          {this.state.showAltBtn === false ?
            null :
            <div className={this.state.viewAlt === false ? "view-toggle viewAlt-button" : "view-toggle viewAlt-button view-toggle-selected"} onClick={this.toggleViewAlt}>View other angle</div>
          }
        </div>

        <div id="us-wrapper">
          <div id="view-screen view1">
            {this.state.view1 === false ? null :
              <img src={thisTorso.usviews[0]} />
            }
          </div>
          <div className="view-screen view2">
            {this.state.view2 === false ? null :
              <img src={thisTorso.usviews[1]} />
            }
          </div>
          <div className="view-screen view3">
            {this.state.view3 === false ? null :
              <img src={thisTorso.usviews[2]} />
            }
          </div>
          <div className="view-screen view4">
            {this.state.view4 === false ? null :
              <img src={thisTorso.usviews[3]} />
            }
          </div>
          <div className="view-screen view5">
            {this.state.view5 === false ? null :
              <img src={thisTorso.usviews[4]} />
            }
          </div>
          <div className="view-screen view6">
            {this.state.view6 === false ? null :
              <img src={thisTorso.usviews[5]} />
            }
          </div>
          <div className="view-screen view7">
            {this.state.view7 === false ? null :
              <img src={thisTorso.usviews[6]} />
            }
          </div>
          <div className="view-screen viewAlt">
            {this.state.viewAlt === false ? null :
              <img src={thisTorso.usviews[7]} />
            }
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
  console.log('MAPSTATE', state)
  return {
    cardiothoracic: state.cardiothoracic,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCardioBlocks: () => dispatch(getCardioBlocks()),
  }
}


export default connect(mapState, mapDispatchToProps)(CardiothoracicTorso)
