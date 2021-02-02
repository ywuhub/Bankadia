import './App.css'

function App() {
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
            <h3 class="greeting">Welcome to Bankadia!</h3>
            <blockquote class="quote">We buy high, so you can sell low.</blockquote>
          </div>
          <div class="column">Test</div>
        </div>
      </div>

      <div class="footer">
        <p>Footer</p>
      </div> 
    </div>
  );
}

export default App;
