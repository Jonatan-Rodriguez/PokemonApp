const axios = require("axios");
const URL = 'https://pokeapi.co/api/v2/pokemon';
const { Pokemon } = require('../db');

const getPokemonId = async (req, res) => {
    try {
        const id = req.params.id;

        //si el id es UUID busco en a base de datos
        if(id.length > 20){
            const pokemonDb = await Pokemon.findByPk(id);

            if(pokemonDb){
                // Convertir el objeto devuelto por Sequelize a un objeto plano
                const pokemonPlain = pokemonDb.get({ plain: true });

                return res.status(200).json(pokemonPlain);
            }
        }


        //busco el id en la API
        const { data } = await axios(`${URL}/${id}`);

        if(data) {
            return res.status(200).json(data);
        }

        return res.status(404).json({error: "Error al solicitar el pokemon"})
    
    } catch (error) {
        console.error('Error al consultar el pokemon:', error.message);

        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getPokemonId
};