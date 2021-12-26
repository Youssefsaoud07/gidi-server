import express from 'express';
import mongoose from 'mongoose';
import GameRecord from '../models/postMessage.js';
import User from '../models/user.js';


import user from '../models/user.js';


const router = express.Router();

export const getRecords = async (req, res) => { 
    
    try {
        const gameRecord = await GameRecord.find().populate('user');
        
        // const player=await User.find({_id:gameRecord.user})
        console.log(gameRecord)
        
        res.status(200).json({gameRecord});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const getPost = async (req, res) => { 
//     const { id } = req.params;

//     try {
//         const post = await PostMessage.findById(id);
        
//         res.status(200).json(post);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const createRecord = async (req, res) => {
    const game = req.body;

    const newgameRecord = new GameRecord({ user: game.user,speed:game.speed,level:game.level, createdAt: new Date().toISOString() })

    try {
        await newgameRecord.save();

        res.status(201).json(newgameRecord);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}







export default router;