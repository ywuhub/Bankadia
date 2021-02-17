import './header.css';

import { BrowserRouter, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

function Header() {
    return (
        <div className="header">
            <div class="logo">
                <h1 id="bank">💸 Bankadia</h1>
            </div>
                
            <BrowserRouter history={history}>
                <div class="topnav">
                    <Link to="">Home</Link>
                    <Link to="/personal">Personal</Link>
                    <Link to="/business">Business</Link>
                    <Link to="/investing">Investing</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About Us</Link>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Header;