import './header.css';

import { BrowserRouter, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Header() {
    let history = useHistory();
  
    function handleClick() {
        history.push("/contact");
    }

    return (
        <div className="header">
            <div class="logo">
                <h1 id="bank">💸 Bankadia</h1>
            </div>
                
            <BrowserRouter>
                <div class="topnav">
                    <Link to="">Home</Link>
                    <Link to="/personal">Personal</Link>
                    <Link to="/business">Business</Link>
                    <Link to="/investing">Investing</Link>
                    <Link to="/contact" onClick={ handleClick }>Contact</Link>
                    <Link to="/about">About Us</Link>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Header;