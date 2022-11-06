import './App.css';
import React, { useState, useEffect } from 'react';
import key from '../src/key.json';
import MovieList from './MovieList';
import MovieListHeader from './MovieListHeader';
import axios from "axios";
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Search from './Search';

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [watchlist, setWatchList] = useState([]);
  const [trending, setTrending] = useState([]);

  const getTrending = () => {
    axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${key.key}&page=1`)
      .then(function (response) {
        // handle success
        setTrending(response.data.results)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  useEffect(() => {
    // eslint-disable-next-line
    searchMovie(query);
  }, [query]);

  useEffect(() => {
    getTrending()
  }, [])

  useEffect(() => {
    const movieWatchList = localStorage.getItem('Watchlist');
    if (movieWatchList) {
      setWatchList(JSON.parse(movieWatchList));
    }
  }, []);

  const addWatchList = (movie) => {
    const newWatchList = [...watchlist, movie];
    setWatchList(newWatchList);
    localStorage.setItem('Watchlist', JSON.stringify(newWatchList));
  };

  const deleteWatchList = (movie) => {
    const newWatchList = watchlist.filter((watchedmovie) => watchedmovie.id !== movie.id)
    setWatchList(newWatchList)
    localStorage.setItem('Watchlist', JSON.stringify(newWatchList));
  };

  const searchMovie = async (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    // Make a request for a user with a given ID

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key.key}&query=${query}`)
      .then(function (response) {
        // handle success
        setMovies(response.data.results)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <Router>
      <div className="App">
        <h1 className='h1 mt-3'>MovieWatch</h1>
        <Nav />
        <Routes>
          <Route path='/' element={
            <>
              <Search query={query} searchMovie={searchMovie}></Search>
              <MovieListHeader header='Search results'></MovieListHeader>
              <MovieList movies={movies} onWatchListClick={addWatchList} btnText="Add to Watchlist" />
            </>
          } />
          <Route path='Watchlist' element={
            <>
              <MovieListHeader header='Watchlisted Movies'></MovieListHeader>
              <MovieList movies={watchlist} onWatchListClick={deleteWatchList} btnText="Delete from Watchlist"></MovieList>
            </>
          } />
          <Route path='Trending' element={
            <>
              <MovieListHeader header='Trending Movies'></MovieListHeader>
              <MovieList movies={trending} onWatchListClick={addWatchList} btnText="Add to Watchlist" ></MovieList>
            </>
          } />
        </Routes>
      </div>
    </Router >

  );
}
export default App;