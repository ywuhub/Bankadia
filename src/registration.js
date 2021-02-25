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
                            <div class="register-row">
                                <div class="register-col-long">
                                    <label for="account_type" class="account_label">Account Type:</label>
                                    <select name="account_type" id="account_type">
                                        <option value="personal">Personal</option>
                                        <option value="business">Business</option>
                                        <option value="investing">Investing</option>
                                    </select>
                                </div>
                            </div>
                            <div class="register-row">
                                <div class="register-col">
                                    <label for="email" class="account_label">Email:</label> <input type="text" name="email"/><br/>
                                </div>
                                <div class="register-col">
                                    <label for="password" class="account_label">Password:</label> <input type="password" name="password"/>
                                </div>
                            </div>
                            <div class="register-row">
                                <div class="register-col">
                                    <label for="confirm_email" class="account_label">Confirm Email:</label> <input type="text" name="confirm_email"/><br/>
                                </div>
                                <div class="register-col">
                                    <label for="confirm_password" class="account_label">Confirm Password:</label> <input type="password" name="confirm_password"/><br/>
                                </div>
                            </div>                                                 
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            <h3>Personal Details</h3>
                        </legend>
                        <div>
                            <label for="name" class="account_label">Email:</label> <input type="text" name="name"/> <br/>
                            <label for="phone" class="account_label">Password:</label> <input type="number" name="phone"/><br/>
                        </div>
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