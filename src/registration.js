import './registration.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Register() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => { console.log(data); };

    return (
        <div className="registration">
            <div class="register-header">
                <h1>Apply Today</h1>
                <p>Apply for a new bank account by completing the form below.</p>
            </div>
            
            <div class="register-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>New Bank Account Form</h2>
                    <fieldset>
                        <legend>
                            <h3>Account Details</h3>
                        </legend>
                        <div class="account-details"> 
                            <div class="register-row">
                                <div class="register-col-long">
                                    <label for="account_type" class="account_label">Account Type:</label>
                                    <select name="account_type" id="account_type" ref={register}>
                                        <option value="personal">Personal</option>
                                        <option value="business">Business</option>
                                        <option value="investing">Investing</option>
                                    </select>
                                </div>
                            </div>
                            <div class="register-row">
                                <div class="register-col">
                                    <label for="email" class="account_label">Email:</label> <input type="text" id="email" name="email" ref={register({ required : true })}/><br/>
                                    {errors.email && 'Email is required.'}
                                </div>
                                <div class="register-col">
                                    <label for="password" class="account_label">Password:</label> <input type="password" id="password" name="password" ref={register({ required : true })}/>
                                    {errors.password && 'Password is required.'}
                                </div>
                            </div>
                            <div class="register-row">
                                <div class="register-col">
                                    <label for="confirm_email" class="account_label">Confirm Email:</label> <input type="text" name="confirm_email" ref={register({ required : true })}/><br/>
                                </div>
                                <div class="register-col">
                                    <label for="confirm_password" class="account_label">Confirm Password:</label> <input type="password" name="confirm_password" ref={register({ required : true })}/><br/>
                                </div>
                            </div>                                                 
                        </div>
                    </fieldset>
                    <fieldset>
                        <legend>
                            <h3>Personal Details</h3>
                        </legend>
                        <div class="personal-details">
                            <div class="register-row">
                                <div class="register-col-long">
                                    <label for="name" class="account_label">Name:</label>
                                    <select name="name_prefix" id="name_prefix">
                                        <option value="mr">Mr</option>
                                        <option value="mrs">Mrs</option>
                                        <option value="ms">Ms</option>
                                        <option value="dr">Dr</option>
                                    </select>
                                    <input type="text" name="fname" id="fname" placeholder="First Name" required/><input type="text" name="lname" id="lname" placeholder="Last Name" required/><br/>
                                </div>
                            </div>
                            <div class="register-row">
                                <div class="register-col-long">
                                    <label for="birthday" class="account_label">Date of Birth:</label>
                                    <input type="date" name="birthday" id="birthday" required/><br/>
                                </div>
                            </div>
                            <div class="register-row">
                                <div class="register-col-long">
                                    <label for="phone">Enter your mobile number: </label>
                                    <input type="tel" id="phone" name="phone" pattern="[0-9]{3}\s[0-9]{4}\s[0-9]{4}" placeholder="Format: xxx xxxx xxxx" required/>
                                </div>
                            </div>
                            <div class="register-row">
                                <div class="register-col">
                                    <label for="street_address">Street Address: </label>
                                    <input type="text" id="street_address" name="street_address" placeholder="Enter your address..." required/>
                                </div>
                                <div class="register-col">
                                    <label for="city" id="city-label">City/Suburb: </label>
                                    <input type="text" id="city" name="city" placeholder="Enter your city..." required/>
                                </div>
                            </div>
                            <div class="register-row">
                                <div class="register-col">
                                    <label for="state">State: </label>
                                    <select name="state_list" id="state_list">
                                        <option value="ACT">Australian Captial Territory</option>
                                        <option value="NSW">New South Wales</option>
                                        <option value="QLD">Queensland</option>
                                        <option value="SA">South Australia</option>
                                        <option value="NT">Northen Territory</option>
                                        <option value="WA">Western Australia</option>
                                        <option value="TAS">Tasmania</option>
                                        <option value="VIC">Victoria</option>
                                    </select>
                                </div>
                                <div class="register-col">
                                    <label for="postcode" id="postcode-label">Postcode: </label>
                                    <input type="text" id="postcode" name="postcode" pattern="[0-9]{4}" placeholder="Enter your postcode..." required/>
                                </div>
                            </div>
                        </div>  
                    </fieldset>
                    <fieldset>
                        <legend>
                            <h3>Terms and Confirmation</h3>
                        </legend>
                        <div class="register-col-long">
                            <input type="checkbox" id="check_1" name="check_1" value="check_1" required/>
                            <label for="check_1"> Check this box if you agree to our <Link to="/terms" target="_blank">terms and conditions.</Link></label><br/>
                            <input type="checkbox" id="check_2" name="check_2" value="check_2" required/>
                            <label for="check_2"> Check this box if the above information is 100% true and you agree to give us all your money if this is not the case.</label><br/>
                            <button class="sign_up"><span>Sign up for free</span></button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Register;