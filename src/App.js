import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Home";
import DetailedCard from './DetailedCard';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/news/:id" component={DetailedCard} />
      </Switch>
    </div>
  );
}

export default App;
