import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import EnrollLogin from './pages/EnrollLogin';
import Home from './pages/Home';
import Profile from './pages/Profile';


function Routes() {
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={EnrollLogin} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default Routes;