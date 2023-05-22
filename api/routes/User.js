import express from 'express'

const router = express.Router();

router.get('/', (req,res) => {
    res.send('Hello from user')
})

router.get('/register', (req,res) => {
    res.send('Hello from resister')
})


export default router