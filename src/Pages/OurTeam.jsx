import { OUR_TEAM_DATA } from "../components/OurTeamData";
import PagesBanner from "../components/PagesBanner";
import Footer from "../components/Footer";

const OurTeam = () => {
  return (
    <>
      <section className="Our-Team-page">
        <section className="hero-all-pages">
          <div className="hero-about-overlay"></div>
          <div className="container">
            <div className="hero-all-pages-text">
              <h3>
                Our <span>Team</span>
              </h3>
            </div>
          </div>
        </section>

        <div className="cotnainer">
          <div className="our-team-container">
            {OUR_TEAM_DATA.map(({ id, name, position, img }) => (
              <div key={id} className="our-team-container-box">
                <div className="our-team-container-box-img">
                  <img src={img} alt="our-team-img" />
                </div>
                <div className="our-team-container-box-info">
                  <h3>{name}</h3>
                  <p>{position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PagesBanner />
        <Footer />
      </section>
    </>
  );
};
export default OurTeam;
