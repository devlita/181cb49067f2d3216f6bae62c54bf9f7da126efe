import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import LDbar from './components/LDbar';
import Lunch from './contents/Lunch';
import Dinner from './contents/Dinner';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Router>
        <LDbar />
        <Switch>
          <Route
            exact
            path="/181cb49067f2d3216f6bae62c54bf9f7da126efe"
            render={() => {
                return (
                  <Redirect to="/lunch" />
                )
            }}
          />
          <Route exact path="/lunch" component={Lunch} />
          <Route exact path="/dinner" component={Dinner} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
