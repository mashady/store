import React, { Component } from "react";

import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import Swiper from "./common/swiper";

import "../styles/product.css";

const coverUrl =
  "https://getbootstrap.com/docs/5.2/examples/features/unsplash-photo-1.jpg";

const sliderCoverOne =
  "https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-3.jpg";

const sliderCoverTwo =
  "https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-2.jpg";

export default class product extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const theAllGenres = await getGenres();
    //const genres = [{ _id: "", name: "All Genres" }, ...data];

    const theAllMovies = await getMovies();
    this.setState({ movies: theAllMovies, genres: theAllGenres });
  }

  render() {
    // Just For Test !!
    let theMoviesData = this.state.movies;
    let theGenresData = this.state.genres;
    console.log(theMoviesData);
    console.log(theGenresData);

    return (
      <div className="row" style={{}}>
        <div className="col-4 p-5" style={{ position: "-webkit-sticky" }}>
          <div
            className="product-cover rounded-2 shadow-lg"
            style={{
              height: "400px",
              backgroundRepat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundImage: `url(${coverUrl})`,
              width: "80%",
            }}
          ></div>
          <figcaption className="figure-caption">
            A caption for the above image.
          </figcaption>
          <button
            className="btn btn-primary"
            style={{
              width: "80%",
              margin: "1rem 0",
              fontSize: "1.1rem",
            }}
          >
            Add to Cart
          </button>
          <button
            className="btn btn-link"
            style={{
              width: "80%",
              fontSize: "1.1rem",
            }}
          >
            Check out Now
          </button>
        </div>
        <div className="col-6">
          <main>
            <h3 className="product-title mt-5 mb-4 display-6 lh-1 fw-bold">
              short title,long jaccket
            </h3>
            <div className=" d-flex align-items-center p-3 p-info rounded-2 shadow-sm bg-light">
              <FontAwesomeIcon
                style={{ color: "#ffa41c", fontSize: "1.2rem" }}
                icon={faStar}
              />
              <FontAwesomeIcon
                style={{ color: "#ffa41c", fontSize: "1.2rem" }}
                icon={faStar}
              />
              <FontAwesomeIcon
                style={{ color: "#ffa41c", fontSize: "1.2rem" }}
                icon={faStar}
              />
              <FontAwesomeIcon
                style={{ color: "#ffa41c", fontSize: "1.2rem" }}
                icon={faStar}
              />
              <FontAwesomeIcon
                style={{ color: "#ffa41c", fontSize: "1.2rem" }}
                icon={faStar}
              />
              <div className="price d-flex align-items-center ">
                <span className="last-price">
                  Last Price: <span>20$</span>
                </span>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginRight: "0.8rem",
                  }}
                >
                  -
                </span>
                <span className="price-now">15$</span>
              </div>
            </div>
            <div className="product-delivery rounded shadow-sm mt-2 bg-light">
              <FontAwesomeIcon
                className=""
                style={{ marginRight: "0.5rem", color: "#4a148c" }}
                icon={faMapMarkerAlt}
              />
              <a
                href=""
                className="delivery-location"
                style={{ marginRight: "0.5rem" }}
              >
                delivery to Egypt
              </a>
              <span className="delivery-date-between">
                <span>December 30</span> - <span>Jenuary 29</span>
              </span>
            </div>
            <div className="product-describtion p-3">
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words. Paragraph of text beneath the
                heading to explain the heading. We'll add onto it with another
                sentence and probably just keep going until we run out of words.
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
