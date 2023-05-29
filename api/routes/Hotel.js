import express from 'express'
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotelCon.js';
import { verifyAdmin} from '../utils/verifyToken.js';
const router = express.Router();

//Create

router.post('/',verifyAdmin, createHotel)

//Update

router.put('/find/:id',verifyAdmin, updateHotel)

//Delete

router.delete('/find/:id',verifyAdmin, deleteHotel)

//Get

router.get('/find/:id', getHotel)

//Get All

router.get('/', getAllHotel);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);


export default router