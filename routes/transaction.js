import express from 'express';
import { createTransaction, getTransaction } from '../controllers/transactions.js';



const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getTransaction);
// router.get('/allTransaction', getAllTransactions);
router.post('/', createTransaction);


export default router;