import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgetpassword from './components/Forgetpassword';
import VerifyEmail from './components/VerifyEmail';
import VerifySuccess from './components/VerifySuccess';
import CreateNewPassword from './components/CreateNewPassword';
import CreatedPassword from './components/CreatedPassword';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/signin' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/forget-password' component={Forgetpassword} />
        <Route path='/verify-email' component={VerifyEmail} />
        <Route path='/verify-success' component={VerifySuccess} />
        <Route path='/create-new-password' component={CreateNewPassword} />
        <Route path='/created-password' component={CreatedPassword} />
      </Switch>
    </Router>
  );
}

export default App;
