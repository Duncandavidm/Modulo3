// src/routes/users.js
const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');
const { addFavoriteMovie, getFavoriteMovies } = require('../controllers/movieController');
const { authenticate } = require('../middleware/authMiddleware');

// Rutas para las películas favoritas
router.post('/favorite', authenticate, addFavoriteMovie);
router.get('/favorite', authenticate, getFavoriteMovies);

module.exports = router;
