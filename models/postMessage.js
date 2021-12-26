import mongoose from 'mongoose';

const gameSchema = mongoose.Schema({
    
    speed: String,
    level: String,
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var GameRecord = mongoose.model('GameRecord', gameSchema);

export default GameRecord;