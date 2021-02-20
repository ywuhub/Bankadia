import './about.css'
import doggo from './images/dog-ceo.jpg';
import cat from './images/cat-finance.jpg';
import bear from './images/bear-marketing.jpg';

function About() {
    return(
        <div className="about">
            <div class="about-header">
                <h1>About Bankadia</h1>
                <p>Started from the bottom and now, we are still here.</p>
                <p></p>
            </div>

            <div class="about-team">
                <h2>Our Trustworthy Team</h2>
                <p>We have a combined experience of over 9000 years in the banking industry and so you can be assured that you are dealing with the best of the best of the worst..</p>
                <div class="about-row">
                    <div class="about-column">
                        <div class="about-card">
                            <img class="doggo" src={doggo} alt="CEO"></img>
                            <div class="about-container">
                                <h2>Dr Doggo Dogson</h2>
                                <p class="about-title">CEO & Founder</p>
                                <p>Doggo has a wealth of experience in the finance industry starting from a small town pup to now managing an empire. Graduated with a Dogtorate in Statistics.</p>
                                <p>Email: allbarknobite@bankadia.com</p>
                                <p><button class="about-button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div class="about-column">
                        <div class="about-card">
                            <img class="cat" src={cat} alt="Finance Manager"></img>
                            <div class="about-container">
                                <h2>Mrs Catherine Meowl</h2>
                                <p class="about-title">Finance Manager</p>
                                <p>A friendly face in the Finance industry that you can trust with your money and somes a weird obsession with Tuna.</p>
                                <p>Email: wontbarkorbite@bankadia.com</p>
                                <p><button class="about-button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                    <div class="about-column">
                        <div class="about-card">
                            <img class="bear" src={bear} alt="Marketing Guru"></img>
                            <div class="about-container">
                                <h2>Mr Builda Beare</h2>
                                <p class="about-title">Marketing Guru</p>
                                <p>When we need to get the word out about a new product or service, Builda is the go to person for the task. Has pulled over 2000 successfuly marketing campaigns in the span of 23 minutes and also loves fishing during the summer.</p>
                                <p>Email: unbearablepuns@bankadia.com</p>
                                <p><button class="about-button">Contact</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;