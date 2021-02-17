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
          <center><h1>Our Financial Guides</h1></center>
          <hr></hr>
          <h2>Quick  Guides</h2>
          <Accordion 
            title="How to level up in the world of Internet Banking?"
            content="<b>Method</b>
            <p>Step 1: Preheat oven to 170C or 150C fan-forced. Grease a 20cm (base) round cake pan lightly with oil, and line with non-stick baking paper.<p>
            <p>Step 2: Put the brown sugar, oil, golden syrup, eggs and vanilla in a separate bowl. Use a balloon whisk to mix until combined.</p>
            <p>Step 3: Sift the flours, bicarbonate of soda and cinnamon into a large bowl.</p>
            <p>Step 4: Pour the oil mixture into the dry ingredients. Use a wooden spoon to stir gently until just combined. Stir in the grated carrot.</p>
            <p>Step 5: Pour the mixture into the pan and bake for 1 hour. Set aside for 5 minutes, before turning out onto a wire rack to cool completely.</p>
            <p>Step 6: To make the icing, place the cream cheese, icing sugar and vanilla in a bowl. Use a wooden spoon to mix until well combined.</p>
            <p>Step 7: Spread the icing over the cake.</p>
            "
          />
          <Accordion 
            title="What is Cryptocurrency?"
            content="<p>A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. 
            Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. 
            A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.</p>"
          />
          <Accordion 
            title="Simple ways to save on the $$$."
            content="<p><b>Make a budget:</b> Budgeting helps you prioritise your expenditure and find a balance between spending and saving across a whole year.</p>
            <p><b>Track your spending:</b> It’s important to keep track of your day-to-day spending, so you don’t live beyond your means. 
            Your bank statement will tell you how much money is going into your bank account and how much is going out. 
            You can then compare it with your budget to see whether you’re sticking to it or not. You can then identify areas where you can save.</p>
            <p><b>Pay off your credit card:</b> With credit-card interest rates in Australia as high as 25 per cent or more, it’s easy to see how the rash use of a credit card can undermine even the most modest of savings goals.
            Paying your credit card in full and on time is the best way to avoid interest charges and late-payment fees.</p>
            <p><b>Open a savings account:</b> By restricting access to your money, savings accounts can give you a higher interest rate than a basic transaction account. 
            Savings accounts are somewhere you can put some or all of your discretionary income – the amount left over after paying for personal necessities and tax – and any windfalls (e.g. tax refund).</p>
            <p><b>Control your impulses:</b> Credit cards, ATMs and online shopping make it easier than ever to spend money. 
            Especially on things we want rather than need; the extent to which we succumb to temptation typically boils down to our willpower. 
            Studies have shown that self-control is a bit like a muscle that tires out with use.</p>"
          />
          <Accordion 
            title="How do I become a Financial Translator?"
            content="<p>A financial translator is involved in all types of banking activity, tax, stock market and more general economic activities. Here are five tips to focus in this specific area.<p>
            <ol style=''>
              <li><b>TRAIN YOURSELF, IN TRANSLATION LIKE IN FINANCE:</b> A university degree is generally required for those who want to become a translator. You have the choice between a university degree in linguistics and translation or receiving a degree in different financial subjects that interests you more, by joining a business or management school or by following an accounting or financial studies course.</li>
              <li><b>MASTER YOUR AREA OF EXPERTISE:</b> To be a financial translator, it`s necessary to have the experience to decipher investment fund management reports, stock market analyses or macroeconomic studies in fields as varied as finance, insurance, accounting, auditing… so you should know what you´re talking about! In other words, a financial translator is also an accountant, an investor, an insurer.</li>
              <li><b>IDENTIFY YOUR LIMITS AND PRIORITIES:</b> You need to ask the right questions before you start. How much time are you ready to dedicate to your training? Are you able to take responsibility where millions are gambled? How far are you willing to go?</li>
              <li><b>BE MOBILE:</b> The world of finance is always moving. From tabloids to currency conversion rates, you’ll have to constantly adapt to the changing variables.</li>
              <li><b>JOIN FINANCIAL TRANSLATOR ASSOCIATIONS:</b> It’s an increasingly in demand profile from various financial institutions and income can quickly increase for those who combine linguistic and financial specialties.</li>
            </ol>"
          />
          <Accordion 
            title="Five ways to boost your Financial Literacy"
            content="<p>There is a sea of information in the online world and it can be a good place to brush up on a few terms. Once you know what information you want, a simple search should be enough to give you plenty of information around it.<p>
            <ol style=''>
              <li><b>Get information online:</b> The internet also provides tools and applications, which means you may not need to know everything, but the basics and the system will give you the relevant information. However, one must be wary that not all information on the Internet can be correct and some may be dated. Also, in most cases it may not be exhaustive and the information available may be patchy. It Is advisable that you do not base your financial decisions solely based on what you pick up on the Internet.</li>
              <li><b>Get expert help:</b> A good second step in getting financially literate would be to get professional help. Once you have got some preliminary knowledge on the subject you seek information, greater in-depth insights can be provided by professionals who deal with the matter. Some basic knowledge also helps in asking the right question and gauging if the professional help has been of any help to you. What is interesting to note that you can now get expert help even over the Internet and do not have to sit down and have a face-to-face conversation with a professional.</li>
              <li><b>Newspaper, magazines and seminars:</b> By merely reading a business newspaper of a magazine, a person can pick up a lot. If you make it a habit and diligently read publications that cover financial news, you can pick up a lot. This is particularly true in the areas of personal finance where newspapers and magazines play a very important role through their extensive coverage, tips and tricks and advise.</li>
              <li><b>Enroll for a short-term course:</b> If you are serious about furthering your financial literacy level, you can enroll for a short-term course. Always remember free ways to gain financial literacy often has its own shortcomings and there is only so much you can rely on it. There are many short-term courses that you can pick up and one has to first decide which aspect he wants to obtain deeper knowledge.</li>
              <li><b>Financial tools/apps:</b> Financial tools and apps are relatively new, but can be a great resource. One needs to feed in some basic information and automated algorithms do the rest for you. There are great online tools that help you calculate your EMI, taxes that you would need to pay, documents you need to fill among others. Apps that reside on your phone takes it one step further and in fact can help you in your transaction.</li>
            </ol>"
          />
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