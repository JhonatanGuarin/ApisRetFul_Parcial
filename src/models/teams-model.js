const mongoose = require('mongoose')
const {Schema} = mongoose


const teamSchema = new Schema({

    name : {
        type: String,
        required : true,
        trim: true,
        unique: true
    },
    year : {
        type: Number,
        default: 0
    },
    titles : {
        type: String,
        trim: true
    },
    city : {
        type: String,
        trim: true
    }

  })
  
  module.exports = mongoose.model('Team',teamSchema)