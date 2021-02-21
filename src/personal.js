import './products.css';

function Personal() {
    return (
        <div className="product-banking">
            <div class="product-header">
                <h1>Personal Banking</h1>
                <p>Our everyday bank accounts are packed full of flavours and antioxidants to help you manage and grow your money</p>
            </div>

            <div class="product-body">
                <h1>What we offer</h1>
                <hr class="product-line"></hr>
                <h2>Get up to 3% p.a. variable interest on your savings</h2>
                <h3 class="product-para">When you grow your savings with a Bankadia Savings Account and make 5 eligible purchases with a debit card linked to your Savings Account each month</h3>
                <p class="product-para">This is made up of 0.20% p.a. variable base rate + 0.20% p.a. variable bonus for saving each month + 2.60% p.a. 
                   Spend & Save bonus for spending 5 times. Applies to the first $30,000 in your Bankadia Savings Account. After this amount you’ll earn 0.40% p.a. variable interest.</p>
            </div>

            <div class="product-features">
                <h1>Features</h1>
                <div class="product-row">
                    <div class="product-col">
                        <h3>Transaction Accounts</h3>
                        <p>Transaction accounts designed to help you manage and access your money securely and conveniently.</p>
                    </div>
                    <div class="product-col">
                        <h3>High Interest Savings Accounts</h3>
                        <p>Choose from savings accounts designed to support your long and short term savings goals that can reward you with a competitive interest rate.</p>
                    </div>
                    <div class="product-col">
                        <h3>Term Deposits</h3>
                        <p>Know exactly what your return will be with the certainty of a fixed interest rate and a choice of different terms.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal;