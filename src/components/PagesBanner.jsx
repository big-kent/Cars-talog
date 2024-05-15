import { Link } from "react-router-dom";
import pagesbannerimg from "../images/pages-banner/pagesbannerimg.png";

const PagesBanner = () => {
  return (
    <>
      <div className="book-banner">
        <div className="book-banner-overlay"></div>
        <div className="container">
          <div className="text-content">
            <img src={pagesbannerimg} alt="" />
            <h2>Choose your quality car quick and easy</h2>
            <Link to="/" className="find-car-link">
              Find Your Car &nbsp;
              <i class="fa-solid fa-check"></i>
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default PagesBanner;
