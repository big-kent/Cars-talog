const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content-1">
              <li>
                <span>Cars</span>-Talog
              </li>
              <li>
                Contact us today if you have any questions. We care, we have the
                car for you.
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                fabio@fabiomiguel.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; support@carstalog.com
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/"
                >
                  Coded by Trung
                </a>
              </li>
            </ul>

            <ul className="footer-content-2">
              <li>Quick Links</li>
              <li>
                <a href="#home">Shop Audi</a>
              </li>
              <li>
                <a href="#home">Shop Mercedes</a>
              </li>
              <li>
                <a href="#home">Shop Volkswagen</a>
              </li>
              <li>
                <a href="#pick-car">Our Fleet</a>
              </li>
              <li>
                <a href="#home">Buy Now</a>
              </li>
            </ul>

            <ul className="footer-content-2">
              <li>We Are Open</li>
              <li>24/7</li>
            </ul>

            <ul className="footer-content-2">
              <li>Subscription</li>
              <li>
                <p>Subscribe to our newsletter for all the latest offers.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">
                  <i class="fa-regular fa-paper-plane"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
