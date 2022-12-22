import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";
export default class navbar extends Component {
  render() {
    return (
      <nav className="p-3 rounded-bottom shadow-sm navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">abustore</a>
        <div className="nav">
          <a
            href=""
            style={{
              color: "black",
              fontWeight: "500",
              textDecoration: "underline",
            }}
          >
            signin{" "}
          </a>
          <a href="">
            <FontAwesomeIcon
              style={{
                fontSize: "2rem",
                position: "relative",
                top: "2px",
                marginLeft: "0.5rem",
              }}
              icon={faCartPlus}
            />
          </a>
        </div>
      </nav>
    );
  }
}
