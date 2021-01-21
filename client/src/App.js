import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Shop from './components/Shop/Shop';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;