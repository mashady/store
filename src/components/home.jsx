import React, { Component } from "react";
import Swiper from "./common/swiper";
import "../styles/home.css";
const healthSection =
  "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg";
const coverUrl =
  "https://getbootstrap.com/docs/5.2/examples/features/unsplash-photo-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "./common/productCard";
export default class home extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="row">
            <div className="col-md-6 mb-4">
              <h3>Find all you need, Enjoy the store.</h3>
              <button
                className="btn btn-primary shop-now"
                style={{
                  padding: "1rem 3rem",
                }}
              >
                SHOP NOW
              </button>
            </div>
            <div className="col-md-6">
              <div className="header-swiper">
                <Swiper />
              </div>
            </div>
          </div>
        </header>
        <div className="explore-by-category">
          <div className="row">
            <div className="col-md-4">
              <div
                className="product-card"
                style={{
                  width: "",
                  cursor: "pointer",
                  margin: "1rem",
                }}
              >
                <h5>cat 1</h5>
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
                <a href="">explore now</a>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="product-card"
                style={{
                  width: "",
                  cursor: "pointer",
                  margin: "1rem",
                }}
              >
                <h5>cat 1</h5>
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
                <a href="">explore now</a>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="product-card"
                style={{
                  width: "",
                  cursor: "pointer",
                  margin: "1rem",
                }}
              >
                <h5>cat 1</h5>
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
                <a href="">explore now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-offers">
          <h3>Feature Offers</h3>
          <div className="row">
            <div className="col-md-3">
              <ProductCard />
            </div>
            <div className="col-md-3">
              <ProductCard />
            </div>
            <div className="col-md-3">
              <ProductCard />
            </div>
            <div className="col-md-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
