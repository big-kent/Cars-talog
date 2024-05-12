import Footer from "../components/Footer";
import PagesBanner from "../components/PagesBanner";

const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <section className="hero-all-pages">
          <div className="hero-about-overlay"></div>
          <div className="container">
            <div className="hero-all-pages-text">
              <h3>
                Contact <span>Us</span>
              </h3>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="contact-content">
            <div className="contact-content-text">
              <h2>Need help? Get in touch we are here to help.</h2>
              <p>
                If you have any questions about buying, don’t
                worry. We got you covered.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (123) 456-7869
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                support@carstalog.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Ho Chi Minh City,
                Vietnam
              </a>
            </div>
            <div className="contact-form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Nguyen Quoc Trung"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="quoctrung090803@gmail.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write your query here.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <PagesBanner />
        <Footer />
      </section>
    </>
  );
};
export default Contact;
