import { useState } from "react";
import { CAR_DATA } from "./CarData";
import CarBox from "./CarBox";

const PickCar = () => {
  const [activeCar, setActiveCar] = useState(1);
  const [colorBtnId, setColorBtnId] = useState(1);

  const handleActiveCar = (id) => {
    setActiveCar(id);
    setColorBtnId(id);
    return colorBtnId === id ? "active-btn" : "";
  };

  return (
    <>
      <section id="pick-car" className="pick-car-section">
        <div className="container">
          <div className="pick-car-container">
            <div className="pick-car-container-title">
              <h2>Our Dictinary Cars</h2>
              <h3>Car Models</h3>
              <p>
                Choose a car to purchase from our diverse web and fulfil your
                driving dreams.
              </p>
            </div>
            <div className="pick-car-container-car-content">
              <div className="pick-car-box">
                {CAR_DATA.map(({ id, name }) => {
                  return (
                    <button
                      className={`pick-car-btn ${
                        colorBtnId === id ? "color-btn" : ""
                      }`}
                      key={id}
                      onClick={() => handleActiveCar(id)}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>

              <CarBox data={CAR_DATA} carId={activeCar} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PickCar;
