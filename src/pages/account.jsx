import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import RegisterForm from '../components/register/registerform'
import PasswordChangeForm from '../pages/changepassword';
import { AuthUserContext, withAuthorization } from '../components/session';

class Account extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirecttohome : false
    }
  }
  redirect = () => {
    this.setState({
      redirecttohome : true
    })
  }
  render() {
    if(this.state.redirecttohome === true){
      return <Redirect to='/home'/>
    }
    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div className="register-page">
            <h1>Account: {authUser.email}</h1>
              <RegisterForm redirect={this.redirect}/>
              <PasswordChangeForm />
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);