import express from 'express';
import moment from 'moment';
import mongoose from 'mongoose';
import GameRecord from '../models/postMessage.js';
import User from '../models/user.js';


import user from '../models/user.js';


const router = express.Router();

export const getRecords = async (req, res) => { 
    let date_req = new Date();
    try {
        const gameRecord = await GameRecord.find().populate('user');
        const filtered= gameRecord.filter((record)=>record.createdAt.toISOString().replace('-', '/').split('T')[0].replace('-', '/')==date_req.toISOString().replace('-', '/').split('T')[0].replace('-', '/'))
        
        // const player=await User.find({_id:gameRecord.user})
        console.log(filtered)
       
        
            res.status(200).json({filtered});
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTop = async (req, res) => { 
    let date_ob = new Date();
    let month = date_ob.getMonth()
    try {
        const gameRecord = await GameRecord.find().populate('user');
        const filtered= gameRecord.filter((record)=>record.createdAt.getMonth()==month)
        
        // const player=await User.find({_id:gameRecord.user})
        console.log(filtered)
       
        
            res.status(200).json({filtered});
        
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
    const date= new Date()
    const dategame=moment(date).format('YYYY-MM-DD')
    const newgameRecord = new GameRecord({ user: game.user,speed:game.speed,level:game.level, createdAt: new Date().toISOString(),gamedate:dategame })

    try {
        await newgameRecord.save();

        res.status(201).json(newgameRecord);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}







export default router;