import React, { Component } from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Header/>
        
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
        </Switch>

      </BrowserRouter>
    );
  }
}
export default App;