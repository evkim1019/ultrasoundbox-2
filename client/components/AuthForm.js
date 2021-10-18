import React from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <div id="loginsignup" className="content-box">
      { name === 'login' ?
        <form onSubmit={handleSubmit} name={name}>
          <div>
            <label htmlFor="username">Username</label>
            <input name="username" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" />
          </div>
          <div>
            <button className="button" type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        :
        <form onSubmit={handleSubmit} name={name}>
          <div className="formfield">
            <label htmlFor="username">Email address</label>
            <input name="username" type="email" autoFocus required maxLength={75} />
          </div>
          <div className="formfield">
            <label htmlFor="fullName">Full name</label>
            <input name="fullName" type="text" required maxLength={75} />
          </div>
          <div className="formfield">
            <label htmlFor="password">Password</label>
            <input name="password" type="password" required maxLength={75} />
          </div>
          <div className="formfield">
            <label htmlFor="confirmpassword">Confirm password</label>
            <input name="confirmpassword" type="password" required maxLength={75} />
          </div>
          <div>
            <button type="submit" className="button">{displayName}</button>
          </div>
          {error && error.response && <div><br /> {error.response.data} - please use a different email</div>}
        </form>
      }
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      if (evt.target.name === 'login') {
        const formName = evt.target.name
        const username = evt.target.username.value
        const password = evt.target.password.value
        dispatch(authenticate(username, password, formName))
      } else if (evt.target.name === 'signup' && evt.target.password.value === evt.target.confirmpassword.value) {
        const formName = evt.target.name
        const username = evt.target.username.value
        const password = evt.target.password.value
        const fullName = evt.target.fullName.value
        dispatch(authenticate(username, password, formName, fullName))
      }
      else {
        alert('passwords do not match - please correct and submit again')
        evt.target.password.value = '';
        evt.target.confirmpassword.value = '';
        evt.target.password.focus();
      }

    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
