// src/models/User.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  rating: Number, // Nuevo campo para almacenar la calificación
});

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  movieList: [movieSchema], // Campo para almacenar el listado de películas con calificaciones
});

module.exports = mongoose.model('User', userSchema);
