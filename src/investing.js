import './products.css';

function Investing() {
    return (
        <div className="product-banking">
            <div class="product-header">
                <h1>Investing Products</h1>
                <p>Take control of your future with our range of investing and term deposit options.</p>
            </div>

            <div class="product-body">
                <h1>Award Winning Online Broker</h1>
                <hr class="product-line"></hr>
                <h3 class="product-para">Why Join Bankadia Investing?</h3>
                <p class="product-para">
                    <p>Whether you’re starting out or an experienced investor, see how you can get more value from trading with us.</p>
                    <p>You can take advantage of our great range of benefits, including our mobile app so you can trade on the go, cutting-edge research for investment ideas, up-to-date market, industry and economic commentary from the Bankadia experts, products to help you diversify, support if you need it and much more.</p>
                    <p>Watch to see why more Australians trade online with Bankadia.</p>
                </p>
            </div>

            <div class="product-features">
                <h1>Features</h1>
                <div class="product-row">
                    <div class="product-col-two">
                        <h3>Share Trading/Investing Account</h3>
                        <div class="product-content">
                            <p>Regular expert insights, stock recommendations and dedicated customer support from Australia's No.1 online broker for just $10 per trade under $1000.</p>
                            <p>Bankadia's is Australia's No.1 online broker and has been helping investors reach their goals for more than 20 years. Sign up for access to the tools and support you need to trade with confidence.</p>
                        </div>
                    </div>
                    <div class="product-col-two">
                        <h3>Term Desposits</h3>
                        <div class="product-content">
                            <p>With our Term Deposits, you have the security of locking in a fixed rate of return, giving you greater peace of mind.</p>
                            <p>You can choose from a range of terms to suit your needs. Anything from 1 month to 5 years.</p>
                            <p>Combined balances of up to $250,000 per account holder are guaranteed and secured by the Australian Government.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Investing;