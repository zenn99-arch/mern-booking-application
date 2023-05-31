import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from '../controllers/hotelCon.js';
import { verifyAdmin} from '../utils/verifyToken.js';
const router = express.Router();

//Create

router.post('/', createHotel)

//Update

router.put('/find/:id', updateHotel)

//Delete

router.delete('/find/:id', deleteHotel)

//Get

router.get('/find/:id', getHotel)

//Get All

router.get('/', getAllHotel);
router.get('/countByCity', countByCity)
router.get('/countByType', countByType)
router.get('/room/:id', getHotelRooms)


export default router