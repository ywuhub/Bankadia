import './registration.css';

function Register() {
    return (
        <div className="registration">
            <div class="register-header">
                <h1>Apply Today</h1>
                <p>Apply for a new bank account by completing the form below.</p>
            </div>
            
            <div class="register-form">
                <form>
                    <h2>New Bank Account Form</h2>
                    <fieldset>
                        <legend>
                            <h3>Account Details</h3>
                        </legend>
                        <div class="account-details">                           
                            <label for="email" class="account_label">Email:</label> <input type="text" name="email"/> <br/>
                            <label for="password" class="account_label">Password:</label> <input type="password" name="password"/>
                            <label for="confirm_password" class="account_label">Confirm Password:</label> <input type="password" name="confirm_password"/><br/>  
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            <h3>Personal Details</h3>
                        </legend>
                    </fieldset>
                    <fieldset>
                        <legend>
                            <h3>Terms and Confirmation</h3>
                        </legend>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register;