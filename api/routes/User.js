import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/userCon.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send('hello user, you are authenticated')
// })

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('hello user, you are authenticated and you can delete.')
// })

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('hello user, you can delete everything .')
// })

//Update
router.put('/:id', updateUser)

//Delete

router.delete('/:id', deleteUser)

//Get

router.get('/:id', getUser)

//Get All

router.get('/', getAllUser)


export default router