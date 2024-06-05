const mongoose = require('mongoose')


const {Schema} = mongoose

const playerSchema = new Schema({

    name : {
        type: String,
        required : true
    },
    position : {
        type: String,
        required : true
    },
    age : {
        type: Number,
        default: 0
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true
      },

  })
  
  module.exports = mongoose.model('GuarinPlayers',playerSchema)