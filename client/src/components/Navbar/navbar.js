import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      // <nav className="navbar fixed-top" style={{ backgroundColor: "#ADD8E6", marginBottom: "40px",  height: "50px" }}>
      //     <Link to="searchforbooks" style= {{color: "#00BFFF", fontSize: "25px", marginRight: "10px"}} >Home</Link>
      //     <Link to="savedbooks" style= {{color: "#00BFFF", fontSize: "25px"}}>View Saved</Link>
      // </nav>

      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#e0bb55" }}
      >
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <div className="container">
          {" "}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/">
                <li className="nav-item active">
                  <a className="nav-link" >
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
              </Link>
              <Link to="/savedbooks">
                <li className="nav-item">
                  <a className="nav-link">
                    View Saved
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
