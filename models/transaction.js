import mongoose from 'mongoose';

const transactionModel = mongoose.Schema({
    
    amount: Number,
   
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    status:String,
    gamedate:String,
})

var Transaction = mongoose.model('Transaction', transactionModel);

export default Transaction;