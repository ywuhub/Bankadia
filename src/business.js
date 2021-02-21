import './products.css';

function Business() {
    return (
        <div className="product-banking">
            <div class="product-header">
                <h1>Business Banking</h1>
                <p>Expertise, insights, technology and products to support your business.</p>
            </div>

            <div class="product-body">
                <h1>Business-Grade Online Banking</h1>
                <hr class="product-line"></hr>
                <h3 class="product-para">Save time and gain more control of your finances, with Bankadia's Banking for Business.</h3>
                <p class="product-para">
                    <ul class="business-ul">
                        <li>Sign in from any device to manage your business banking when and where it suits you.</li>
                        <li>Get real-time visibility of your finances plus the choice to delegate tasks while maintaining control.</li> 
                        <li>Access state-of-the-art tools designed to make your banking quicker, easier and more integrated.</li>
                    </ul>
                </p>
            </div>

            <div class="product-features">
                <h1>Features</h1>
                <div class="product-row">
                    <div class="product-col">
                        <h3>Business Transaction Account</h3>
                        <div class="product-content">
                            <p>An everyday bank account with a linked Business Visa debit card - separating business from personal spending.</p>
                            <p>Switch between $0 and $10 monthly account fee options depending on how you use your account. With flexibility to switch between the two options at any time.</p>
                        </div>
                    </div>
                    <div class="product-col">
                        <h3>High Interest Savings Accounts</h3>
                        <div class="product-content">
                            <p>A business savings account that can help you manage cash flow and set aside money for tax payments.</p>
                            <p>Interest is calculated daily and paid monthly on the full balance when $10,000 or more is held in the account.</p>
                        </div>
                    </div>
                    <div class="product-col">
                        <h3>Term Deposits</h3>
                        <div class="product-content">
                            <p>A low-risk investment ideal for maximising surplus cash in your business.</p>
                            <p>Choose from a range of terms to fix your interest rate and avoid market fluctuations - anything from 1 month up to 5 years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business;