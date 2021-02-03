import './App.css'

function App() {
  const year = new Date().getFullYear();

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
            <blockquote class="quote">We buy high, so you can sell low.</blockquote>
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
        <div class="row">
          <div class="column">

          </div>
          <div class="column">
          </div>
        </div>
      </div>

      <div class="footer-basic">
        <footer>
          <a href="https://github.com/ywuhub"><i class="fa fa-github"></i></a>
          <p class="copyright">Bankadia © {year}| Created by Allan Wu | Inspired By <a href="https://www.youtube.com/channel/UCm22FAXZMw1BaWeFszZxUKw" target="_blank" rel="noreferrer">Kitboga</a></p>
        </footer>
    </div> 
    </div>
  );
}

export default App;
