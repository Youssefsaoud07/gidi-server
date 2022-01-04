import express from 'express';

import { getRecords, createRecord, getTop } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getRecords);
router.get('/top', getTop);
router.post('/',auth,  createRecord);
// router.patch('/:id', auth, updatePost);
// router.delete('/:id', auth, deletePost);
// router.patch('/:id/likePost', auth, likePost);

export default router;