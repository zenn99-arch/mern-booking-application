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
router.put('/:id',verifyUser, updateUser)

//Delete

router.delete('/:id',verifyUser, deleteUser)

//Get

router.get('/:id',verifyUser, getUser)

//Get All

router.get('/',verifyAdmin, getAllUser)


export default router