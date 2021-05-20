
import  {Route, Switch, BrowserRouter} from 'react-router-dom';
import fetch from './components/fetch';
import charts from './components/charts';
import home from './pages/home';
import React from 'react';
import SignUp from './pages/signup';

// import "bootstrap/dist/css/bootstrap.min.css";



const Routes = () =>  {
  return (
    <BrowserRouter>
    <Switch>
      <div className = "App">
        <Route path="/" component = {SignUp} exact />
        <Route path="/fetch" component={fetch} exact />
        <Route path="/charts" component = {charts} exact />
        <Route path="/home" component = {home} exact />
      </div>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;