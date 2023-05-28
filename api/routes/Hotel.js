import express from 'express'
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotelCon.js';
import { verifyAdmin} from '../utils/verifyToken.js';
const router = express.Router();

//Create

router.post('/',verifyAdmin, createHotel)

//Update

router.put('/:id',verifyAdmin, updateHotel)

//Delete

router.delete('/:id',verifyAdmin, deleteHotel)

//Get

router.get('/:id', getHotel)

//Get All

router.get('/', getAllHotel)


export default router