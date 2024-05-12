const HowItWorks = () => {
  return (
    <>
      <section className="how-it-works-section">
        <div className="container">
          <div className="how-it-works-content">
            <div className="how-it-works-title">
              <h2>How It Works</h2>
              <h3>Quick & easy car dictionary</h3>
            </div>

            <div className="how-it-works-columns">
              <div className="how-it-works-col-1">
                <i class="fa-solid fa-car-on"></i>
                <h3>Select Car</h3>
                <p>
                  Choose a quality car from our range. We are sure we have the
                  perfect car to meet your driving needs.
                </p>
              </div>

              <div className="how-it-works-col-2">
                <i class="fa-solid fa-map-location-dot"></i>
                <h3>Location</h3>
                <p>Simply choose your location.</p>
              </div>

              <div className="how-it-works-col-3">
                <i class="fa-solid fa-timeline"></i> <h3>Dates</h3>
                <p>
                  Choose the nanufacturing dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HowItWorks;
