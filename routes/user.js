import express, { Router } from "express";

const router = express.Router();


import { energyControler, getuser, refill, signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post('/signup',signup)
router.get('/info',getuser)
router.put('/energy',energyControler)
router.put('/refill',refill)


export default router;