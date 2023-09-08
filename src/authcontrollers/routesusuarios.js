// src/routes/users.js
{const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');
const { addFavoriteMovie, getFavoriteMovies } = require('../controllers/movieController');
const { authenticate } = require('../middleware/authMiddleware');

// Rutas para las películas favoritas
router.post('/favorite', authenticate, addFavoriteMovie);
router.get('/favorite', authenticate, getFavoriteMovies);
}
{module.exports = router;
// src/routes/users.js
const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');
const {
  addMovieToList,
  getMovieList,
  removeMovieFromList,
  rateMovie,
} = require('../controllers/movieController');
const { authenticate } = require('../middleware/authMiddleware');

// Rutas para el listado de películas de cada usuario
router.post('/movies', authenticate, addMovieToList);
router.get('/movies', authenticate, getMovieList);
router.delete('/movies/:movieId', authenticate, removeMovieFromList);
router.put('/movies/:movieId/rate', authenticate, rateMovie); // Nueva ruta para calificar películas

module.exports = router;
}