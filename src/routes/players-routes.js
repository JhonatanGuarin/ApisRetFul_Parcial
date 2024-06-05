const router = require('express').Router()

const {
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer
  } = require('./../controllers/controll-players')

router.get('/players', getPlayers)

router.get('/players/:id', getPlayer)

router.post('/players', createPlayer)

router.put('/players/:id', updatePlayer)

router.delete('/delete/:id', deletePlayer)




module.exports = router