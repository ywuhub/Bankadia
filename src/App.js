import './App.css'
import coins from './images/coins.jpg';
import creditcard from './images/credit-card.svg';
import homeloan from './images/home-loan.svg';
import piggybank from './images/piggy-bank.svg';
import termdeposit from './images/term-deposit.svg';

function App() {
  const year = new Date().getFullYear();

  var greeting = [
    "We buy high, so you can sell low.",
    "If money doesn't grow on trees, then why do banks have branches?",
    "We are not like the other banks. We are worse.",
    "Now opening 25/7.",
    "Ask us about our interest free savings account."
  ]

  var index = Math.floor(Math.random() * (greeting.length-1));

  return (
    <div className="App">
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

      <div class="login">
        <div class="row">
          <div class="column">
            <h3 class="greeting bubbles">Welcome to Bankadia!</h3>
            <blockquote class="quote">{greeting[index]}</blockquote>
          </div>
          <div class="column-login">
            <div class="members">
              <form>
                <select name="account" id="account">
                  <option value="personal">Personal</option>
                  <option value="business">Business</option>
                  <option value="investing">Investing</option>
                </select>
                <br></br>
                <input class="fields" type="text" id="username" name="username" placeholder="Username"></input><br></br>
                <input class="fields" type="text" id="password" name="password" placeholder="Password"></input><br></br>
                <input class="signin" type="submit" value="Login"></input>
                <input class="register" type="button" value="Create Account"></input>
              </form>
              <a href="#forgot_password" target="_blank">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>

      <div class="guide">
        <div class="row">
            <div class="column">
              <a href="#account-options" class="guide_anchor">Banking Options &#9654;</a>
              <p>If you think our banking options are just like our competitors, you're right, because it's all about money, money, money.</p>
            </div>
            <div class="column">
              <a href="#help-center" class="guide_anchor">Financial Help Center &#9654;</a>
              <p>Learn how to navigate the world of financial jargon through our comprehensive gluten free articles.</p>
            </div>
        </div>
      </div>

      <div class="introduction">
        <div class="row-a">
          <div class="column-a">
            <p class="intro-header">We are the future of banking.</p>
            <p class="intro-paragraph">The only interest you will be getting here is our interest in taking your money and we will stop at nothing until that happens.                                        
                    <br></br><br></br> Check us out today to see how we replaced the highly demanded toilet paper with the three seashells. Oh, we also have that banking stuff as well.</p>
          </div>
          <div class="column-b">
            <img class="coins" src={coins} alt="coins"></img>
          </div>
        </div>
        <div id="slideshow"></div>
      </div>

      <div class="rates">
        <p class="rates-title">Our Competitive Rates</p>
        <hr class="seperator"></hr>
        <br></br>
        <div class="rate-row">
          <div class="rate-col">
            <p class="rate-title">Savings</p>
            <img class="rate-icons" src={piggybank} alt="Savings Rate"></img>
            <p class="rate-text">0.99% p.a.</p>
         </div>
          <div class="rate-col">
            <p class="rate-title">Term Deposit</p>
            <img class="rate-icons" src={termdeposit} alt="Term Deposit Rate"></img>
            <p class="rate-text">3.99% p.a.</p>
          </div>
          <div class="rate-col">
            <p class="rate-title">Home Loan</p>
            <img class="rate-icons" src={homeloan} alt="Term Deposit Rate"></img>
            <p class="rate-text">5.99% p.a.</p>
          </div>
          <div class="rate-col">
            <p class="rate-title">Credit Card</p>
            <img class="rate-icons" src={creditcard} alt="Term Deposit Rate"></img>
            <p class="rate-text">6.66% p.a.</p>
          </div>
        </div>
      </div>

      <div class="footer-basic">
        <footer>
          <center><a href="https://github.com/ywuhub" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a></center>
          <p class="copyright">Bankadia LLC © {year}| Created by Allan Wu | Inspired By <a href="https://www.youtube.com/channel/UCm22FAXZMw1BaWeFszZxUKw" target="_blank" rel="noreferrer">Kitboga</a></p>
        </footer>
      </div>
    </div>
  );
}

export default App;