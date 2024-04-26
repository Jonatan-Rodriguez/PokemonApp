const axios = require("axios");
const URL = 'https://pokeapi.co/api/v2/pokemon'; //https://pokeapi.co/api/v2/pokemon/1/
const { Pokemon } = require('../db');

const getPokemonsAll = async (req, res) => {
    try {
        const allPokemons = [];

        //traigo a los pokemon de la base de datos
        const pokemonsDb = await Pokemon.findAll();

        if(pokemonsDb[0]){
            pokemonsDb.map(async (dbPokemon) => {

                allPokemons.push(dbPokemon);
            });
        }

        // Traigo a los pokemon de la API
        const { data } = await axios(URL);
        if (data.results) {
            const promises = data.results.map(async (pokemon) => {
                const { data: pokemonData } = await axios(pokemon.url);
                allPokemons.push(pokemonData);
            });

            // Espero a que todas las promesas se resuelvan
            await Promise.all(promises);
        }

        return res.status(200).json(allPokemons);

    } catch (error) {
        console.error('Error al consultar todos los pokemones:', error.message);

        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    getPokemonsAll
};