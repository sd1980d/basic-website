import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.scss';


class Navbar extends Component {
    render(){
        return(
            <nav className="nav">
                <ul className="navlist" >
                    <li className="navitem"><NavLink exact to="/">Home</NavLink></li>
                    <li className="navitem"><NavLink to="/about/">About</NavLink></li>
                    <li className="navitem"><NavLink to="/shop/">Shop</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;