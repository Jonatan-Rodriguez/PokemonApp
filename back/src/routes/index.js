const { Router } = require("express");
const { getPokemonsAll } = require("../controllers/getPokemonsAll");
const { getPokemonId } = require("../controllers/getPokemonId");

const router = Router();

router.get('/pokemon', getPokemonsAll);

router.get('/pokemon/:id', getPokemonId);
/* 
router.get('/drivers', getDriversAll);

router.get('/drivers/:id', getDriverById);

router.post('/drivers', postDriver);

router.get('/teams', getTeams); */

module.exports = router;