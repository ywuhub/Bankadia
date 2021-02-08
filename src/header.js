import './header.css';

function Header() {
    return (
        <div  className="header">
            <div class="logo">
                <h1 id="bank">💸 Bankadia</h1>
            </div>
                
            <div class="topnav">
                <a href="#personal">Personal</a>
                <a href="#business">Business</a>
                <a href="#investing">Investing</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}

export default Header;