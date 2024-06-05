const router = require('express').Router()

const {
    getTeams,
    getTeam
  } = require('./../controllers/controll-teams')

router.get('/teams', getTeams)

router.get('/teams/:id', getTeam)


module.exports = router