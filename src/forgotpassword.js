import './forgotpassword.css';

function Forgot() {
    return (
        <div className="forgot_password">
            <div class="forgot_header">
                <h1>Forgot Password</h1>
                <p>If you have forgotten your password or car keys, you can reset them here.</p>
            </div>

            <div class="form_outer">
                <div class="forgot_form">
                    <p class="forgot_text">Please enter your email address registered to your bank account. We will send you an email to reset your password.</p>
                    <form>
                        <label>Email: </label>
                        <input class="forgot_email" type="text" placeholder="Your email address here..."></input><br></br>
                        <button class="forgot_button" type="submit">Send Email</button>
                    </form>                
                </div>    
            </div>
            
        </div>
    )
}

export default Forgot;