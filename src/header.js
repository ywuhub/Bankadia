import { BrowserRouter, Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <div className="header">
            <div class="logo">
                <h1 id="bank">💸 Bankadia</h1>
            </div>
                
            <div class="topnav">
                <BrowserRouter>
                    <Link to="">Personal</Link>
                    <Link to="">Business</Link>
                    <Link to="">Investing</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="">About</Link>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Header;