import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header';
import Firstpage from './components/Firstpage';
import SecondPage from './components/SecondPage';
import Notfound from './components/Notfound';

// import Button from '@material-ui/core/Button';
function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path='/first' component={Firstpage} />
          <Route path='/second' component={SecondPage} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
