import './header.css';

import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div class="logo">
                <h1 id="bank">💸 Bankadia</h1>
            </div>

            <div class="topnav">
                <Link to="/">Home</Link>
                <Link to="/personal">Personal</Link>
                <Link to="/business">Business</Link>
                <Link to="/investing">Investing</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Us</Link>
            </div>
        </div>
    )
}

export default Header;