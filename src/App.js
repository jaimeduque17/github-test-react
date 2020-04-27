import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './pages/home';
import About from './pages/about';
import Detail from './pages/detail';

import 'bulma/css/bulma.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/detail/:gistId' component={Detail} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
