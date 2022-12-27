import React, { Component } from "react";
import "../../styles/productCard.css";
const cardBG =
  "https://m.media-amazon.com/images/I/51zuLArexiL._AC_UF226,226_FMjpg_.jpg";
const coverUrl =
  "https://getbootstrap.com/docs/5.2/examples/features/unsplash-photo-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

export default class productCard extends Component {
  render() {
    return (
      <div
        className="product-card"
        style={{
          width: "",
          cursor: "pointer",
          margin: "1rem",
        }}
      >
        <div
          className="product-bg rounded mb-2"
          style={{
            backgroundImage: `url(${coverUrl})`,
            backgroundRepat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: "300px",
          }}
        ></div>
        <div className="card-body">
          <h6 className="card-title">
            Much longer title that wraps to multiple lines
          </h6>
          <span>33$</span>
          <FontAwesomeIcon className="card-options" icon={faEllipsisVertical} />
        </div>
      </div>
    );
  }
}
