const { isObjectIdOrHexString } = require('mongoose')
const Player = require('./../models/players-model')
const Team = require('./../models/teams-model')


module.exports = {
    getPlayers : async(req,res)=>{
      try{
        const result = await Player.find().populate('team', 'name');
        return res.status(200).json({data:result})
      }catch(err){
        return res.status(500).json({err:err})
      }
    },
    createPlayer : async(req,res)=>{
      try {
        const { team: teamId, ...playerData } = req.body;
    
        const teamExists = await Team.findById(teamId);
    
        if (!teamExists) {
          return res.status(404).json({ error: "El equipo no existe"  });
        }

        const player = new Player({ ...playerData, team: teamId });
        const result = await player.save();
    
        return res.status(201).json({ data: result });
      } catch (err) {
        return res.status(500).json({ error: "El equipo no existe" });
      }
    },

    getPlayer : async( req,res )=>{
      try{
        const {id} = req.params
        const result = await Player.findById(id).populate('team', 'name');
  
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