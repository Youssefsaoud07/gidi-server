import express from 'express';
import Transaction from '../models/transaction.js';
import UserModal from '../models/user.js'
import moment from 'moment';
const router = express.Router();

export const getTransaction = async (req, res) => { 
   
    try {

        const transaction = await Transaction.find().populate('user');
        
        console.log(transaction)
       
        res.status(200).json({transaction});
        
    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}

export const createTransaction = async (req, res) => {
    const trans = req.body;
    const date= new Date()
    
    const transaction = new Transaction({ user: trans.userTrans,amount:trans.userTrans.balance, createdAt: new Date().toISOString(),status:'pending' })

    try {
        
        await transaction.save();
          const transfert= await UserModal.findOneAndUpdate({_id:trans.userTrans._id},{accountnumber:trans.accountNum,accountName:trans.accontName,bankname:trans.bankname,balance:0},{new:true})

        res.status(201).json({message:'Your request has been saved',transfert});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}