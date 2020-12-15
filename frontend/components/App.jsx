import React from 'react'
import Splash from './splash/splash'
import { Route, Switch } from 'react-router-dom';
import Form from './reviews/Form';
import Nav from './nav/nav'
import ReviewIndex from './reviews/Index';


export default function App() {
  return (
    <div className="app-container">
      <Nav/>
    <Switch>
        <Route path='/new_review' component={Splash} />
        <Route path='/reviews' component={ReviewIndex} />
        <Route exact path='/' component={Splash}/>
    </Switch>
    </div>

  );
}