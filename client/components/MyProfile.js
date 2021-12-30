import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUser, updateUser } from '../store/users'
/**
 * COMPONENT
 */
class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      username: '',
      displayname: '',
      enableSave: false,
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    await this.props.getUser(this.props.id);
    const user = this.props.users[0];

    this.setState({
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      displayname: user.fullName,
      enableSave: false,
      message: ''
    })
  }

  handleChange(ev) {
    let { name, value } = ev.target;
    switch (name) {
      case "username":
        if (ev.target.value.length > 75) return;
        break;
      case 'fullName':
        if (ev.target.value.length > 75) return;
        break;
    }
    this.setState(
      Object.assign({}, this.state, { [name]: value }, { enableSave: true })
    );
  }

  handleSubmit(ev) {
    ev.preventDefault();

    this.props.updateUser({
      id: this.state.id,
      fullName: ev.target.fullName.value
    });
    this.setState(
      Object.assign({}, this.state, {
        enableSave: false,
        message: 'Changes saved!',
        displayname: this.state.fullName
      })
    )
    // console.log('STATE AFTER SUBMIT ', this.state)
    window.setTimeout(() => this.setState({ message: '' }), 3000)
    window.setTimeout(() => location.reload(), 3000)
  }

  render() {
    // console.log('PROPS, STATE', this.props, this.state)
    return (
      <div className="content-box" id="myprofile">
        <h3>{this.state.displayname}'s profile</h3>
        { this.state.message &&
          <div>
            <p>{this.state.message}</p>
          </div>
        }

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" name="username" disabled value={this.state.username} />
          </div>
          <div>
            <label htmlFor="fullName">Full name</label>
            <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
          </div>
          <div>
            <button className='button' disabled={!this.state.enableSave}>Save</button>
          </div>
        </form>
      </div>
    )
  }
}


/**
 * CONTAINER
 */
const mapState = state => {
  return {
    users: state.users,
    id: state.auth.id,
    // username: state.auth.username,
    // name: state.auth.name,
    // cardiothoracic: state.cardiothoracic,
    // renal: state.renal,
    // efast: state.efast,
    // ruq: state.ruq,
    // takes: state.takes
  }
}


const mapDispatchToProps = {
  getUser,
  updateUser
}


export default connect(mapState, mapDispatchToProps)(MyProfile)
