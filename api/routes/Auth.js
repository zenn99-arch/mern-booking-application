import express from 'express'
import { login, registerUser } from '../controllers/authCon.js';

const router = express.Router();

//create user
router.post('/register', registerUser)
router.post('/login', login)


export default router