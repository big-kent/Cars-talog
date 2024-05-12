const Search = () => {
  return (
    <div className="section-search">
      <div className="container">
        <div className="search-box-banner">
          <form action="/">
            <ul className="align-items-center">
              {/* pickup location */}
              <li className="column-group-main">
                <div className="form-group">
                  <label htmlFor="/">Pickup Location</label>
                </div>
                <div className="group-img">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter City, Airport, or Address"
                  />
                  <span>
                    <i>/</i>
                  </span>
                </div>
              </li>
              {/* pickup date */}
              <li className="column-group-main">
                <div className="form-group">
                  <label htmlFor="/">Pickup Date</label>
                </div>
                <div className="form-group-wrap">
                  <div className="form-group date-widget">
                    <div className="group-img">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="23/11/2023"
                      />
                      <span>
                        <i className="feather-calander"></i>
                      </span>
                    </div>
                  </div>
                  <div className="form-group time-widget">
                    <div className="group-img">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="23/11/2023"
                      />
                      <span>
                        <i className="feather-calander"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              {/* return date */}
              <li className="column-group-main">
                <div className="form-group">
                  <label htmlFor="/">Return Date</label>
                </div>
                <div className="form-group-wrap">
                  <div className="form-group date-widget">
                    <div className="group-img">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="23/11/2023"
                      />
                      <span>
                        <i className="feather-calander"></i>
                      </span>
                    </div>
                  </div>
                  <div className="form-group time-widget">
                    <div className="group-img">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="23/11/2023"
                      />
                      <span>
                        <i className="feather-calander"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
              {/* search btn */}
              <li className="column-group-last">
                <div className="form-group">
                  <div className="search-btn">
                    <button className="btn search-btn" type="submit">
                      <i className="fa fa-search">search</i>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Search;
