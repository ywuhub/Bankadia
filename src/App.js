// Import Styles
import './App.css'

// Import Graphics
import coins from './images/coins.jpg';
import creditcard from './images/credit-card.svg';
import homeloan from './images/home-loan.svg';
import piggybank from './images/piggy-bank.svg';
import termdeposit from './images/term-deposit.svg';

// Import Componments
import { useRef } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Accordion from './accordion.js';
import Modal from './modal.js';

function Main() {
  var greeting = [
    "We buy high, so you can sell low.",
    "If money doesn't grow on trees, then why do banks have branches?",
    "We are not like the other banks. We are worse.",
    "Now opening 25/7.",
    "Ask us about our interest free savings account."
  ]

  var index = Math.floor(Math.random() * (greeting.length-1));
  
  const modal = useRef(null);
  const modal_two = useRef(null);

  return (
    <div className="main">
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
                <p onClick={() => modal.current.open()} class="guide_anchor">Banking Options &#9654;</p>
                <p>If you think our banking options are just like our competitors, you're right, because it's all about money, money, money.</p>
              </div>
              <div class="column">
                <p onClick={() => modal_two.current.open()} class="guide_anchor">Financial Help Center &#9654;</p>
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
              <p class="rate-text">1.99% p.a.</p>
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

        <Modal ref={modal}>
          <center><h1>Our Banking Options</h1></center>
          <hr></hr>
          <h2>Personal Banking</h2>
          <div>
            <Accordion
              title="Transaction Account"
              content="<p>A transaction account is an everyday account used to manage your finances. You can deposit your income, and withdraw money to spend it on the things you need in a variety of ways:</p>
                <ul>
                  <li>Debit card (EFTPOS, payWave/PayPass)</li>
                  <li>Electronic payments and online shopping</li>
                  <li>Digital wallet (e.g. Google Wallet, Samsung Pay, Apple Pay)</li>
                  <li>ATMs</li>
                  <li>Direct debit</li>
                  <li>Bpay</li>
                  <li>Branch access</li>
                  <li>Cheques</li>
              </ul>"
            />
            <Accordion
              title="High Interest Savings Account"
              content="<p>A high interest savings account is a savings account that offers an extremely competitive interest rate to help your savings grow. 
              All high interest savings accounts have variable interest rates, meaning your rates could go up or down over time, 
              usually in response to changes to the Reserve Bank cash rate.</p>
              <b>Savings Rate: 1.99% p.a.</b>"
            />
            <Accordion
              title="Term Deposit"
              content="<p>A term deposit is a cash investment held at a financial institution. Your money is invested for an agreed rate of interest over a fixed amount of time, or term. Term deposits can be invested into a bank, building society or credit union.</p>
              <p>When the money is deposited, the customer understands that the money is there for the pre-determined period which usually ranges from 1 month to 5 years and the interest rate is guaranteed not to change for that nominated period of time.  Typically, the money can only be withdrawn at the end of the period – or earlier with a penalty attached.</p>
              <p>Term deposits are popular with investors who prefer capital security and a set return as opposed to the fluctuations of, say, the share market. Many investors also use term deposits as a part of their investment mix.</p>
              <b>Term Rate: 3.99% p.a. for 10 Years</b>"
            />
            <Accordion
              title="Home Loan"
              content="<p>A “home loan” or “mortgage” is a loan advanced to you by a financial institution in return for security over the property you are using the loan to buy. 
              Typically a home loan will be a 25 or 30 year term, with regular repayment amounts fortnightly or monthly that are designed to pay off the loan over the contracted term.</p>
              <p>The loan is secured against your property so if you are unable to continue paying the loan, the lender may ultimately require you to sell the property to settle the debt. 
              Given property prices in Australia, a home loan is realistically the way by which the majority of people will afford to buy a house.</p>
              <b>Fee Rate: 5.99% p.a.</b>"
            />
          </div>
          <h2>Business Banking</h2>
            <Accordion
              title="Business Transaction Account"
              content="<p>An everyday business transaction account with a no monthly account fee option and a linked Business Visa Debit card to help you manage your expenses. Make unlimited electronic transactions for free and receive customised alerts regarding your balances. Flexibility to switch to the $10 monthly account fee option and get 20 assisted transactions per month.</p>
              <ul>
                <li>Monthly account fee: $0</li>
                <li>Linked debit card: Visa</li>
                <li>Assisted transaction fee: $3</li>
              </ul>"
            />
            <Accordion
              title="Business High Interest Account"
              content="<p>A business savings account is an account that allows you to earn interest on your business funds while you're not using them. It's like a regular high interest savings account, except it's for business use rather than personal use. A business savings account will also often have a minimum balance requirement that needs to be met in order to earn interest, and this balance requirement is usually higher than those on personal savings accounts.</p>
              <p>By linking the business savings account to a business transaction account, you can easily transfer money back and forth when you need to. This way your funds will be working for you while you're not using them, generating passive income. A lot of business savings accounts offer tiered interest rates, meaning the higher your balance the more interest you can earn.</p>
              <b>Savings Rate: 4.99% p.a.</b>"
            />
            <Accordion
              title="Business Term Deposit"
              content="<p>Planning a major business purchase? Have you received a lump sum of money that you're keen to put away? A term deposit can be an ideal way to save for a specific goal, as it's enables you to invest and get a guaranteed return, which will be based on the amount you invest and the interest rate on the day you open your term deposit.</p>
              <p>Instead of leaving your money in a transaction account earning little or no interest (and where you may be tempted to use it), why not put your funds away for a period of time that you get to choose and which will earn you a return at the end? This could help you achieve your business goals faster, whether it’s buying a new asset for your business, or simply knowing you have the cash for future opportunities.</p>
              <b>Term Rate: 5.99% p.a. for 10 Years</b>"
            />
          <h2>Investing Products</h2>
            <Accordion
                title="Share Trading Account"
                content="<p>Trade securities using a share trading account. This type of account has features that will appeal to traders, such as free brokerage. 
                A share trading investment account can be tailored to suit your needs, for example, an investment account can easily be made into an investment loan if you need more capital.</p>
                <b>Savings Rate: 0.99% p.a.</b>
                "
              />
              <Accordion
                title="Business High Interest Account"
                content="<p>A margin loan gives you a line of credit to use to invest. Margin loans can be secured to a property or other asset such as a share portfolio. Margin loans can be used for certain investments but not others. You can use a margin loan to invest in common types of investment accounts like what’s discussed on this page</p>
                <b>Fee Rate: 10.99% p.a.</b>"
              />
        </Modal>

        <Modal ref={modal_two}>
          <h1>Hello World</h1>
        </Modal>
    </div>
  )
}

function Contact() {
  return (
    <h1>HELLO WORLD</h1>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path=""><Main /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;