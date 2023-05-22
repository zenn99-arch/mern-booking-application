import express from 'express'
import hotel from '../models/hotel.js';
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotelCon.js';
const router = express.Router();

//Create

router.post('/', createHotel)

//Update

router.put('/:id', updateHotel)

//Delete

router.delete('/:id', deleteHotel)

//Get

router.get('/:id', getHotel)

//Get All

router.get('/', getAllHotel)


export default router