import './footer.css'

function Footer () {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div class="footer-basic">
                <footer>
                    <center><a href="https://github.com/ywuhub" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a></center>
                    <p class="copyright">Bankadia LLC © {year}| Created by Allan Wu | Inspired By <a href="https://www.youtube.com/channel/UCm22FAXZMw1BaWeFszZxUKw" target="_blank" rel="noreferrer">Kitboga</a></p>
                </footer>
            </div>
        </div>
    )
}

export default Footer