import { useState } from "react";

const CarBox = ({ data, carId }) => {
  const [carLoad, setCarLoad] = useState(true);
  return (
    <>
      {data
        .filter((item) => {
          return item.id === carId;
        })
        .map(
          ({
            id,
            name,
            price,
            img,
            model,
            mark,
            year,
            doors,
            air,
            transmission,
            fuel,
          }) => {
            return (
              <div key={id} className="box-cars">
                {/* car img */}
                <div className="car-picked-img">
                  {carLoad && <span className="loader"></span>}
                  <img
                    style={{ display: carLoad ? "nont" : "block" }}
                    src={img}
                    alt={name}
                    onLoad={() => setCarLoad(false)}
                  />
                </div>
                {/* car description */}
                <div className="car-picked-description">
                  <div className="car-picked-price">
                    <span>£{price}</span>/ one
                  </div>
                  <div className="car-picked-table">
                    <div className="car-picked-table-row">
                      <span>Model</span>
                      <span>{model}</span>
                    </div>

                    <div className="car-picked-table-row">
                      <span>Mark</span>
                      <span>{mark}</span>
                    </div>

                    <div className="car-picked-table-row">
                      <span>Year</span>
                      <span>{year}</span>
                    </div>

                    <div className="car-picked-table-row">
                      <span>Doors</span>
                      <span>{doors}</span>
                    </div>

                    <div className="car-picked-table-row">
                      <span>Air Con</span>
                      <span>{air}</span>
                    </div>

                    <div className="car-picked-table-row">
                      <span>Transmission</span>
                      <span>{transmission}</span>
                    </div>

                    <div className="car-picked-table-row">
                      <span>Fuel</span>
                      <span>{fuel}</span>
                    </div>
                  </div>

                  {/* reserve btn */}
                  <a className="book-now-btn" href="#home">
                    Details
                  </a>
                </div>
              </div>
            );
          }
        )}
    </>
  );
};
export default CarBox;
