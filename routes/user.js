import express from "express";

const router = express.Router();






import { energyControler, signin, signup } from "../controllers/user.js";

router.post("/signin", signin);
router.post('/signup',signup)
router.put('/energy',energyControler)


export default router;