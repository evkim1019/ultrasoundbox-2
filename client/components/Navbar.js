import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownBlocks: false,
      dropdownAccount: false,
    }

    this.dropdownAccount = this.dropdownAccount.bind(this);
    this.dropdownBlocks = this.dropdownBlocks.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }


  dropdownBlocks(ev) {
    ev.preventDefault();
    document.getElementById('nav-chooseblocks').style.fontWeight = '800';
    this.setState({ dropdownBlocks: !this.state.dropdownBlocks, dropdownAccount: false }, () => {
      document.addEventListener('click', this.closeDropdown);
    })
  }
  dropdownAccount(ev) {
    ev.preventDefault();
    document.getElementById('nav-account').style.fontWeight = '800';
    this.setState({ dropdownAccount: !this.state.dropdownAccount, dropdownBlocks: false }, () => {
      document.addEventListener('click', this.closeDropdown);
    })
  }
  closeDropdown() {
    document.getElementById('nav-account').style.fontWeight = '500';
    document.getElementById('nav-chooseblocks').style.fontWeight = '500';
    this.setState({ dropdownAccount: false, dropdownBlocks: false }, () => {
      document.removeEventListener('click', this.closeDropdown);
    })
  }

  render() {
    const { handleClick, isLoggedIn, name } = this.props;
    return (
      <div id="navbar">
        <Link to="/home"><h1>ULTRASOUND BOX</h1></Link>
        <nav>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <button id="nav-chooseblocks" onClick={this.dropdownBlocks}>Choose Blocks</button>
              <button id="nav-account" onClick={this.dropdownAccount}>Hi, {this.props.name}</button>
            </div>
          ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            )}
        </nav>
        {
          this.state.dropdownBlocks ?
            <div className="nav-dropdown">
              <Link to="/cardiothoracic">Cardiothoracic</Link>
              <a href="">Renal</a>
              <a href="">EFAST</a>
              <a href="">RUQ</a>
            </div>
            : null
        }
        {
          this.state.dropdownAccount ?
            <div className="nav-dropdown">
              <Link to="/myprofile">Profile</Link>
              <Link to="/my-testhistory">My Test History</Link>
              <a href="/" onClick={handleClick}>
                Logout
              </a>
            </div>
            : null
        }
      </div>
    )
  }
}

const mapState = state => {
  return {
    name: state.auth.name,
    // isAdmin: state.auth.isAdmin,
    isLoggedIn: !!state.auth.id,
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

// const Navbar = ({ handleClick, isLoggedIn }) => (
//   <div id="navbar">
//     <Link to="/home"><h1>ULTRASOUND BOX</h1></Link>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Choose Blocks</Link>
//           <Link to="/home">Account</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//         </div>
//       ) : (
//           <div>
//             {/* The navbar will show these links before you log in */}
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Sign Up</Link>
//           </div>
//         )}
//     </nav>
//   </div>
// )

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.auth.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)
