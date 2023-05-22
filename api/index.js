import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoute from './routes/Auth.js'
import hotelRoute from './routes/Hotel.js'
import roomRoute from './routes/Room.js'
import userRoute from './routes/User.js'
import cookieParser from 'cookie-parser';

const app = express()
dotenv.config()

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongodb')
      } catch (error) {
        throw error
      }
}

mongoose.connection.on("disconnected", () => {
    console.log('mongodb disconnected')
})

//middelware
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/hotel', hotelRoute);
app.use('/api/room', roomRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'something went wrong'
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack,
    })
})


app.listen(8800, () => {
    connect()
    console.log('connected to backend!')
})