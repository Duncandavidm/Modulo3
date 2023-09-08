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
