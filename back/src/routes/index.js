const { Router } = require("express");
const { getPokemonsAll } = require("../controllers/getPokemonsAll");
const { getPokemonId } = require("../controllers/getPokemonId");
const { postPokemon } = require("../controllers/postPokemon");
const { postUser } = require("../controllers/postUser");

const router = Router();

router.get('/pokemon', getPokemonsAll);

router.get('/pokemon/:id', getPokemonId);

router.post('/pokemon', postPokemon);

router.post('/pokemon/login', postUser);

module.exports = router;