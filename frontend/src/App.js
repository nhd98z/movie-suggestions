import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './containers/Home';
import JustNow from './containers/JustNow';
import DetailList from './containers/DetailList';
import UpList from './containers/UpList';
import AboutUs from './containers/AboutUs';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <div className='in'>
              <Route exact path = '/' component = {Home}/> 
              <Route  path = '/justNow' component = {JustNow}/> 
              <Route  path = '/lists/:id' component = {DetailList}/> 
              <Route  path = '/upList' component = {UpList}/> 
              <Route  path = '/aboutUs' component = {AboutUs}/> 
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
