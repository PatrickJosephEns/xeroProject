
import  {Route, Switch, BrowserRouter} from 'react-router-dom';
import fetch from './components/fetch';
import charts from './components/charts';
import React from 'react';
import SignUp from './pages/signup';
// import "bootstrap/dist/css/bootstrap.min.css";



const Routes = () =>  {
  return (
    <BrowserRouter>
    <Switch>
      <div className = "App">
      <Route path="/" component = {SignUp} exac />
        <Route path="/fetch" component={fetch} exact />
        <Route path="/charts" component = {charts} exact />
      </div>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;