import './App.css';
import  {Route, Switch, BrowserRouter} from 'react-router-dom';
import fetch from './components/fetch';
import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";



const App = () =>  {
  return (
    <BrowserRouter>
    <Switch>
      <div className = "App">
        <Route path="/" component={fetch} exact />
        {/* <Route path="/quiz/:id" component = {Questions} exact /> */}
      </div>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
