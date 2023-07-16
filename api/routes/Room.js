import express from 'express'
import { verifyAdmin} from '../utils/verifyToken.js';
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from '../controllers/roomCon.js';
const router = express.Router();

//Create

router.post('/:hotelid', createRoom)

//Update
router.put("/availability/:id", updateRoomAvailability);
router.put('/:id', updateRoom)

//Delete

router.delete('/:id/:hotelid', deleteRoom)

//Get

router.get('/:id', getRoom)

//Get All

router.get('/', getAllRoom)


export default router