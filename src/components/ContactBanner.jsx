import { Link } from "react-router-dom";

const ContactBanner = () => {
  return (
    <>
      <section className="contact-banner-section">
        <div className="container">
          <div className="contact-banner-content">
            <div className="contact-banner-content-text">
              <h2>Whatever your needs, we have a vehicle to suit</h2>
              <p>
                If you need any help, we have <span>24/7</span> support.
              </p>
            </div>
            <div className="contact-banner-content-contact">
              <Link to={"/"} className="contact-banner-content-button">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactBanner;
