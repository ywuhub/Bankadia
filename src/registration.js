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