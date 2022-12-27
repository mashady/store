import React, { Component } from "react";
import ProductCard from "./common/productCard";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";

import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";

import "../styles/genre.css";
import _, { filter } from "lodash";

export default class genre extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 3,
    searchQuery: "",
    //selectedGenre: null,
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const theAllGenres = await getGenres();
    const genres = [{ _id: "", name: "All" }, ...theAllGenres];

    const theAllMovies = await getMovies();
    this.setState({ movies: theAllMovies, genres: genres });
  }

  handleDelete = async (movie) => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter((m) => m._id !== movie._id);
    this.setState({ movies });

    try {
      await deleteMovie(movie._id);
    } catch (error) {
      if (error.response && error.response.status === 404)
        toast.error("This movie has already been deleted.");

      this.setState({ movies: originalMovies }); // undo the changes
    }
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
    console.log(genre);
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedGenre,
      searchQuery,
      movies: allMovies,
    } = this.state;

    let filtered = allMovies;
    if (searchQuery) {
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (selectedGenre && selectedGenre._id) {
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);
    }

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(filtered, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    //const { user } = this.props;

    const { totalCount, data: movies } = this.getPagedData();
    console.log(movies);
    // Just For Test !!
    let theMoviesData = this.state.movies;
    let theGenresData = this.state.genres;
    //console.log(theMoviesData);
    //console.log(theGenresData);
    //console.log(this.state.selectedGenre);
    return (
      <div>
        <div className="side-genre-nav bg-light">
          <div>
            <h3 className="mb-3">categories</h3>
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedItem}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
        </div>
        <main style={{ marginLeft: "251px" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <ProductCard prdouct={movies} />
              </div>
            </div>
          </div>
          <Pagination />
        </main>
      </div>
    );
  }
}
