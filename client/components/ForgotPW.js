import React, { Component } from 'react'
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
class ForgotPW extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const data = {
      userEmail: this.state.userEmail,
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="content-box" id="forgotPW">
        <h1>Forgot your password?</h1>
        <div className="">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input name="email" type="text" onChange={e => this.state.userEmail = e.target.value} />
            </div>

            <div>
              <button className="button" type="submit">Find password</button>
            </div>
          </form>
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
    fullName: state.auth.fullName,
  }
}

const mapDispatchToProps = {
}


export default connect(mapState, mapDispatchToProps)(ForgotPW)
