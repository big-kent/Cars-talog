import Footer from "../components/Footer";
import AboutImg from "../images/about/about-img.jpeg";
import PagesBanner from "../components/PagesBanner";

const About = () => {
  return (
    <>
      <section className="about-page">
        <section className="hero-all-pages">
          <div className="hero-about-overlay"></div>
          <div className="container">
            <div className="hero-all-pages-text">
              <h3>
                About <span>Us</span>
              </h3>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="about-content">
            <img src={AboutImg} alt="Orange Offices" />
            <div className="about-content-text">
              <h2>The keys from our hands to yours</h2>
              <p>
              Welcome to Cars-Talog, where the keys pass from our hands to yours seamlessly. With a curated selection of vehicles, we promise an exceptional experience. Whether it's the thrill of a sports car, the comfort of a luxury sedan, or the versatility of an SUV, we've got you covered. Welcome to where automotive dreams become reality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PagesBanner />
      <Footer />
    </>
  );
};
export default About;
