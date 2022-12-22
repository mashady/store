import React, { Component } from "react";
import ProductCard from "./common/productCard";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";

import "../styles/genre.css";
import _ from "lodash";

export default class genre extends Component {
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

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    //const { user } = this.props;

    const { totalCount, data: movies } = this.getPagedData();
    // Just For Test !!
    let theMoviesData = this.state.movies;
    let theGenresData = this.state.genres;
    console.log(theMoviesData);
    console.log(theGenresData);
    return (
      <div>
        <div className="side-genre-nav bg-light">
          <div>
            <h3 className="mb-3">genres</h3>
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedItem}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
        </div>
        <p style={{ marginLeft: "20rem" }}>
          Showing {totalCount} movies in the database
        </p>
        <main style={{ marginLeft: "200px" }}>
          <div className="row">
            <ProductCard />
          </div>
        </main>
      </div>
    );
  }
}
