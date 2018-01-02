import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LoginStyles } from '../constants'
import { LoginForm, ResetPasswordForm } from '../forms'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {resetPasswordActive: false}
  }

  changeToResetPasswordForm = () => {
    this.setState({resetPasswordActive: true})
  }

  changeToLoginForm = () => {
    this.setState({resetPasswordActive: false})
  }

  getLabels = () => {
    return {
      ...this.props.labels
    }
  }

  onLogin = (userIdentification, password) => {
    this.props.onLogin(userIdentification, password)
  }

  onResetPassword = (userIdentification) => {
    this.props.onResetPassword(userIdentification)
    this.changeToLoginForm()
  }

  renderResetPassword = () => {
    return (
      <ResetPasswordForm
        {...this.props}
        labels={this.getLabels()}
        onBackClick={this.changeToLoginForm}
        onResetPassword={this.onResetPassword}
        showLogo={this.props.showLogoOnResetPassword}
      />
    )
  }

  renderLoginForm = () => {
    return (
      <LoginForm
        {...this.props}
        haveResetPassword={!!this.props.onResetPassword}
        labels={this.getLabels()}
        onResetPasswordClick={this.changeToResetPasswordForm}
        onLogin={this.onLogin}
        showLogo={this.props.showLogoOnLogin}
      />
    )
  }

  render () {
    if (this.state.resetPasswordActive && this.props.onResetPassword) {
      return this.renderResetPassword()
    }

    return this.renderLoginForm()
  }
}

Login.propTypes = {
  labels: PropTypes.object,
  logoImage: PropTypes.any,
  onLogin: PropTypes.func.isRequired,
  onResetPassword: PropTypes.func,
  passwordInputIcon: PropTypes.any,
  resetPasswordHeaderRenderer: PropTypes.func,
  showLogoOnLogin: PropTypes.bool,
  showLogoOnResetPassword: PropTypes.bool,
  userIdentificationInputIcon: PropTypes.any,
  inputPlaceholderTextColor: PropTypes.string,

  backButtonStyle: PropTypes.any,
  backButtonTextStyle: PropTypes.any,
  baseButtonStyle: PropTypes.any,
  baseButtonTextStyle: PropTypes.any,
  inputIconStyle: PropTypes.any,
  loginResetPasswordLinkStyle: PropTypes.any,
  loginResetPasswordLinkTextStyle: PropTypes.any,
  fieldsetWrapperStyle: PropTypes.any,
  inputWrapperStyle: PropTypes.any,
  inputStyle: PropTypes.any,
  loginFormSubmitButtonStyle: PropTypes.any,
  loginFormSubmitButtonTextStyle: PropTypes.any,
  loginFormWrapperStyle: PropTypes.any,
  logoStyle: PropTypes.any,
  resetPasswordFormWrapperStyle: PropTypes.any,
  resetPasswordFormSubmitButtonTextStyle: PropTypes.any,
  resetPasswordFormSubmitButtonStyle: PropTypes.any
}

Login.defaultProps = {
  labels: {},
  showLogoOnLogin: true,
  showLogoOnResetPassword: true,
  inputPlaceholderTextColor: '#ccc',
  userIdentificationInputIcon: require('../assets/images/email_icon.png'),
  passwordInputIcon: require('../assets/images/password_icon.png'),
  backButtonStyle: LoginStyles.backButton,
  backButtonTextStyle: LoginStyles.backButtonText,
  baseButtonStyle: LoginStyles.baseButton,
  baseButtonTextStyle: LoginStyles.baseButtonText,
  fieldsetWrapperStyle: LoginStyles.fieldsetWrapper,
  inputIconStyle: LoginStyles.inputIcon,
  inputStyle: LoginStyles.input,
  inputWrapperStyle: LoginStyles.inputWrapper,
  loginFormWrapperStyle: LoginStyles.formWrappper,
  loginResetPasswordLinkStyle: LoginStyles.loginResetPasswordLink,
  loginResetPasswordLinkTextStyle: LoginStyles.loginResetPasswordLinkText,
  logoStyle: LoginStyles.logo,
  resetPasswordFormSubmitButtonStyle: LoginStyles.resetPasswordFormSubmitButton,
  resetPasswordFormWrapperStyle: LoginStyles.formWrappper
}

export default Login
