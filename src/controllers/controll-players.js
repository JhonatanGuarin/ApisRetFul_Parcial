const { isObjectIdOrHexString } = require('mongoose')
const Player = require('./../models/players-model')


module.exports = {
    getPlayers : async(req,res)=>{
      try{
        const result = await Player.find()
        //const result = await Modality.find({}).populate('projects')
        return res.status(200).json({data:result})
      }catch(err){
        return res.status(500).json({err:err})
      }
    },
    createPlayer : async(req,res)=>{
      try{
        const player = new Player(req.body)
  
        //TODO. validar que el código no exista, si existe return 201
        const result = await player.save()
  
        return res.status(201).json({data:result})
      }catch(err){
        return res.status(500).json({err:err})
      } 
    },
    getPlayer : async( req,res )=>{
      try{
        const {id} = req.params
        const result = await Player.findById(id)
  
        return res.status(200).json({data:result})
      }catch(err){
        return res.status(500).json({error:err})
      }
    },
    updatePlayer : async(req,res)=>{
      
      try{
        const {id} = req.params
        const playerUpdate = await Player.findByIdAndUpdate(id, req.body)
          
        return res.status(200).json({data:playerUpdate})
      }catch(err){
        return res.status(500).json({error:err})
      }
    },
  
    deletePlayer : async (req,res)=>{
      try {

        const result = await Player.findByIdAndDelete(req.params.id)
        
        return res.status(200).json({data:result})
      } catch (error) {
        return res.status(500).json({error:error})
      }
  
    }
  }