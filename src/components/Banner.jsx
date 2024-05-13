// import CarRight from "../images/banner/car-right.png";
import CarRight3 from "../images/banner/car-right-3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section id="home" className="banner-section banner-img">
        <div className="container">
          <div className="banner-content">
            <div className="banner-content-col-1">
              <p className="explore-text">
                <span>
                  <i class="fa-solid fa-thumbs-up"></i>
                </span>
                100% Trusted car dictionary platform in the World
              </p>
              <h1>
                Find Your Best <br></br>
                <span>Dream Car</span>
              </h1>
              <p className="banner-paragraph">
                Find Your Best Dream Car - Trust us to deliver your perfect ride. With top-quality selections, we'll match you with your dream car effortlessly. Your ideal drive is closer than you think.
              </p>
              <div className="banner-btns-container">
                <Link className="btn btn-view-all">
                  View all Cars <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="btn btn-learn-more" to="/Cardictionaryalpha">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="banner-content-col-2">
              <img src={CarRight3} className="img-fluid" alt="banner-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
