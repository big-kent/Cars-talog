import ContactBannerImg from "../images/why-us/contact-banner.png";

const WhyUs = () => {
  return (
    <>
      <section className="why-us-section">
        <div className="container">
          <div className="why-us-container">
            <img
              className="why-us-container-img"
              src={ContactBannerImg}
              alt="cars_img"
            />
            <div className="why-us-text-container">
              <div className="why-us-text-container-col-1">
                <h4>Why Us</h4>
                <h2>The best in class</h2>
                <p>
                  We are trusted. This is what we live and breathe. Our goal is
                  to provide you with what you need, at value for money, with
                  ease, so you can can have the best possible experience.
                </p>
                <a href="#home">
                  Find Your Car &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="why-us-text-container-col-2">
                <div className="why-us-text-container-col-2-box">
                  {/* <img src={Box1} alt="car-img" /> */}
                  <i class="fa-solid fa-1"></i>
                  <div className="why-us-text-container-col-2-box-text">
                    <h4>Our Range</h4>
                    <p>
                      Cars-Talog offers a range of cars at a variety
                      of price points, from economy to luxury. 
                    </p>
                  </div>
                </div>
                <div className="why-us-text-container-col-2-box">
                  <i class="fa-solid fa-2"></i>
                  {/* <img src={Box2} alt="coin-img" /> */}
                  <div className="why-us-text-container-col-2-box-text">
                    <h4>Flat Rate Pricing</h4>
                    <p>
                      There are no hidden charges. Have peace of mind knowing
                      that the price you see is the price you pay. This is our
                      policy, this is our guarantee. Ever need help? We are here
                      24/7.
                    </p>
                  </div>
                </div>
                <div className="why-us-text-container-col-2-box">
                  <i class="fa-solid fa-3"></i>
                  {/* <img src={Box3} alt="coin-img" /> */}
                  <div className="why-us-text-container-col-2-box-text">
                    <h4>Experience</h4>
                    <p>
                      The most swift and easy transaction you will ever do. No
                      complicated process, no hassle. Simply find what you want,
                      when you want it and where you want. That's it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WhyUs;
