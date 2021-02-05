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
        <div class="row-a">
          <div class="column-a">
            <p class="intro-header">We are the future of banking.</p>
            <p class="intro-paragraph">The only interest you will be getting here is our interest in taking your money and we will stop at nothing until that happens.                                        
                    <br></br><br></br> Check us out today to see how we replaced the highly demanded toilet paper with the three seashells. Oh, we also have that banking stuff as well.</p>
          </div>
          <div class="column-b">
            <div id="slideshow">
              <div>
                <img src="//farm6.static.flickr.com/5224/5658667829_2bb7d42a9c_m.jpg" alt="test"></img>
              </div>
              <div>
                <img src="//farm6.static.flickr.com/5230/5638093881_a791e4f819_m.jpg" alt="TEST"></img>
              </div>
              <div>
                Pretty cool eh? This slide is proof the content can be anything.
              </div>
            </div>
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
