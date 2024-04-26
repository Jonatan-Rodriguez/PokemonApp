const { Router } = require("express");
/* const { getDriversAll } = require("../controllers/getDriversAll");
const { getDriverById } = require('../controllers/getDriverById');
const { postDriver } = require('../controllers/postDriver');
const { getTeams } = require('../controllers/getTeams'); */
const { getPokemonsAll } = require("../controllers/getPokemonsAll");

const router = Router();

router.get('/pokemon', getPokemonsAll);
/* 
router.get('/drivers', getDriversAll);

router.get('/drivers/:id', getDriverById);

router.post('/drivers', postDriver);

router.get('/teams', getTeams); */

module.exports = router;