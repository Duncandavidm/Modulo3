// src/controllers/movieController.js
const User = require('../models/User');

exports.addFavoriteMovie = async (req, res) => {
  try {
    const { movieTitle } = req.body;
    const user = req.user; // Obtenemos el usuario autenticado desde el middleware de autenticación
    user.favoriteMovies.push(movieTitle);
    await user.save();
    res.status(200).json({ message: 'Movie added to favorites successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the movie to favorites' });
  }
};

exports.getFavoriteMovies = async (req, res) => {
  try {
    const user = req.user; // Obtenemos el usuario autenticado desde el middleware de autenticación
    res.status(200).json(user.favoriteMovies);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching favorite movies' });
  }
};
// src/controllers/movieController.js
const User = require('../models/User');

exports.addFavoriteMovie = async (req, res) => {
  try {
    const { movieTitle } = req.body;
    const user = req.user;
    user.favoriteMovies.push(movieTitle);
    await user.save();
    res.status(200).json({ message: 'Movie added to favorites successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the movie to favorites' });
  }
};

exports.getFavoriteMovies = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json(user.favoriteMovies);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching favorite movies' });
  }
};

exports.removeFavoriteMovie = async (req, res) => {
  try {
    const { movieTitle } = req.params;
    const user = req.user;
    
    // Encuentra y elimina la película de la lista de favoritos del usuario
    const index = user.favoriteMovies.indexOf(movieTitle);
    if (index !== -1) {
      user.favoriteMovies.splice(index, 1);
      await user.save();
      res.status(200).json({ message: 'Movie removed from favorites successfully' });
    } else {
      res.status(404).json({ error: 'Movie not found in favorites' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while removing the movie from favorites' });
  }
};
// src/controllers/movieController.js
const User = require('../models/User');

exports.addMovieToList = async (req, res) => {
  try {
    const { title } = req.body;
    const user = req.user;
    const movie = { title };
    user.movieList.push(movie);
    await user.save();
    res.status(200).json({ message: 'Movie added to the list successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the movie to the list' });
  }
};

exports.getMovieList = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json(user.movieList);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the movie list' });
  }
};

exports.removeMovieFromList = async (req, res) => {
  try {
    const { movieId } = req.params;
    const user = req.user;
    
    // Encuentra y elimina la película del listado del usuario por su _id
    const movieIndex = user.movieList.findIndex(movie => movie._id.toString() === movieId);
    if (movieIndex !== -1) {
      user.movieList.splice(movieIndex, 1);
      await user.save();
      res.status(200).json({ message: 'Movie removed from the list successfully' });
    } else {
      res.status(404).json({ error: 'Movie not found in the list' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while removing the movie from the list' });
  }
};
// src/controllers/movieController.js
const User = require('../models/User');

exports.addMovieToList = async (req, res) => {
  try {
    const { title } = req.body;
    const user = req.user;
    const movie = { title };
    user.movieList.push(movie);
    await user.save();
    res.status(200).json({ message: 'Movie added to the list successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the movie to the list' });
  }
};

exports.getMovieList = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json(user.movieList);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the movie list' });
  }
};

exports.removeMovieFromList = async (req, res) => {
  try {
    const { movieId } = req.params;
    const user = req.user;
    
    // Encuentra y elimina la película del listado del usuario por su _id
    const movieIndex = user.movieList.findIndex(movie => movie._id.toString() === movieId);
    if (movieIndex !== -1) {
      user.movieList.splice(movieIndex, 1);
      await user.save();
      res.status(200).json({ message: 'Movie removed from the list successfully' });
    } else {
      res.status(404).json({ error: 'Movie not found in the list' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while removing the movie from the list' });
  }
};

exports.rateMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const { rating } = req.body;
    const user = req.user;

    // Encuentra la película en la lista del usuario por su _id
    const movie = user.movieList.find(movie => movie._id.toString() === movieId);
    if (movie) {
      // Asigna la calificación a la película
      movie.rating = rating;
      await user.save();
      res.status(200).json({ message: 'Movie rated successfully' });
    } else {
      res.status(404).json({ error: 'Movie not found in the list' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while rating the movie' });
  }
};
