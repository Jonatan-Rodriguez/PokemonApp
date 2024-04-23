const axios = require("axios");
const URL = 'http://localhost:5000/drivers';
const { Pokemon } = require('../db');
const { Op } = require('sequelize');

const getPokemonsAll = async (req, res) => {
    try {
        
    } catch (error) {
        console.error('Error al consultar todos los pokemones:', error.message);

        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getPokemonsAll
};