import './contact.css'
import { useEffect } from 'react'

function Contact() {
    useEffect( () => {
        handleSubmit();
    }, []);

    const handleSubmit = (event) => {
        const apiUrl = 'https://bankadia-api.herokuapp.com/test';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data['hello']));
    }

    return(
        <div className="contact">
            <div class="contact-background">                
                <div class="contact-form">
                    <center><h1>Contact Us</h1></center>
                    <hr class="line"></hr>
                    <form onSubmit={handleSubmit}>
                        <label for="name">Name</label>
                        <input class="contact-input" type="text" id="name" name="name" placeholder="Your name.."></input>

                        <label for="email">Email</label>
                        <input class="contact-input" type="text" id="email" name="email" placeholder="Your email.."></input>

                        <label for="category">Category</label>
                        <select class="contact-select" id="category" name="category">
                            <option value="enquiry">Enquiry</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                        </select>

                        <label for="subject">Subject</label>
                        <input class="contact-input" type="text" id="subject" name="subject" placeholder="The subject matter.."></input>
                        
                        <label for="message">Message</label>
                        <textarea class="contact-area" id="message" name="message" placeholder="Your message.."></textarea>

                        <input class="contact-submit" type="submit" value="Submit"></input>
                    </form>
                </div>   
            </div> 
        </div>
    )
}

export default Contact;