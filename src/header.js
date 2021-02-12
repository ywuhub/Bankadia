import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './header.css';

import Contact from "./contact.js"

function Header() {
    return (
        <div className="header">
            <div class="logo">
                <h1 id="bank">💸 Bankadia</h1>
            </div>
                
            <BrowserRouter>
                <div class="topnav">
                    <Link to="/">Home</Link>
                    <Link to="">Personal</Link>
                    <Link to="">Business</Link>
                    <Link to="">Investing</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="">About</Link>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Header;