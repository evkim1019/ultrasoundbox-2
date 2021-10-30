import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm';
import Home from './components/Home';
import { me } from './store'

import Cardiothoracic from './components/Cardiothoracic';
import CardiothoracicBlock from './components/CardiothoracicBlock';
import Renal from './components/Renal';
import RenalBlock from './components/RenalBlock';
import Efast from './components/Efast';
import EfastBlock from './components/EfastBlock';
import Ruq from './components/Ruq';
import RuqBlock from './components/RuqBlock';
import MyProfile from './components/MyProfile'
import MyTestHistory from './components/MyTestHistory';
import ReviewMaterials from './components/ReviewMaterials';
import Probes from './components/Probes';
import ForgotPW from './components/ForgotPW';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/cardiothoracic" exact component={Cardiothoracic} />
            <Route path="/cardiothoracic/:id" exact component={CardiothoracicBlock} />
            <Route path="/renal" exact component={Renal} />
            <Route path="/renal/:id" exact component={RenalBlock} />
            <Route path="/efast" exact component={Efast} />
            <Route path="/efast/:id" exact component={EfastBlock} />
            <Route path="/ruq" exact component={Ruq} />
            <Route path="/ruq/:id" exact component={RuqBlock} />

            <Route path="/myprofile" exact component={MyProfile} />
            <Route path="/my-testhistory" exact component={MyTestHistory} />
            <Route path="/review-materials" exact component={ReviewMaterials} />
            <Route path="/probes" exact component={Probes} />
            <Redirect to="/home" />
          </Switch>
        ) : (
            <Switch>
              <Route path='/' exact component={Login} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-pw" component={ForgotPW} />
              <Route path="/signup" component={Signup} />
            </Switch>
          )}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
