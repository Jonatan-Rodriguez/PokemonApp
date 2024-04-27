const { Pokemon } = require('../db');

const postPokemon = async (req, res) => {
    try {
        const { name, image } = req.body;

        const pokemonCreate = await Pokemon.create({ name, image });

        return res.status(200).json(pokemonCreate);
        
    } catch (error) {
        console.error('Error al agregar un pokemon a la DB:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    postPokemon
};