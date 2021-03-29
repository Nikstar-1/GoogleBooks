import React from "react";
import bookSvg from "../open-book.svg";
const Header = () => {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "#F0F8FF", color: "#00BFFF" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto col-md-4 order-md-1 col-lg-5">
              <h1 className="display-4">Google Books Search</h1>
              <p className="lead">
                “Reading is essential for those who seek to rise above the
                ordinary.” – Jim Rohn
              </p>
            </div>
            <div className="col-md-8 order-md-2 col-lg-7 text-center text-md-start">
              <img width="200" alt="something" src={bookSvg} />
              {/* <img src={require('../../mySvgImage.svg').default} alt='mySvgImage' /> */}
              {/* <bookSvg /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
