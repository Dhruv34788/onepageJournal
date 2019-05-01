import React, { Component } from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import { withAuthentication } from '../components/session';

import * as ROUTES from '../constants/routes';
import LandingPage from '../pages/landing';
import AdminPage from '../pages/admin';
import PasswordForgetPage from '../pages/forgetpassword';
import SignInPage from '../pages/signin';
import SignUpPage from '../pages/signup';
import Navigation from './navigation';
import AccountPage from '../pages/account';
import HomePage from '../pages/home';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navigation/>
        <hr />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
  )} 
}
export default withAuthentication(App);
