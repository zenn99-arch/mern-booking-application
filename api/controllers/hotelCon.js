import hotel from "../models/hotel.js"
import rooms from "../models/room.js"

export const createHotel = async (req, res, next) => {
    const newHotel = new hotel(req.body)

    try {
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (err) {
        next(err)
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updateHotel = await hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateHotel)
    } catch (err) {
        next(err)
    }
}

export const deleteHotel = async (req, res, next) => {
    try {
        await hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel deleted")
    } catch (err) {
        next(err)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const findhotel = await hotel.findByIdAndUpdate(req.params.id)
        res.status(200).json(findhotel)
    } catch (err) {
        next(err)
    }
}

export const getAllHotel = async (req, res, next) => {
    const {min, max, ...others} = req.query ;

    try {
        const findAllhotels = await hotel.find({
            ...others,
             cheapestPrice: {$gt: min || 1 , $lt: max || 999 },
            }).limit(req.query.limit)
        res.status(200).json(findAllhotels)
    } catch (err) {
        next(err)
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",")

    try {
        const list = await Promise.all(cities.map(city => {
            return hotel.countDocuments({ city: city })
        }))
        res.status(200).json(list)
    } catch (err) {
        next(err)
    }
}

export const countByType = async (req, res, next) => {


    try {
        const hotelCount = await hotel.countDocuments({ type: 'hotel' });
        const appartmentCount = await hotel.countDocuments({ type: 'appartment' });
        const resortCount = await hotel.countDocuments({ type: 'resort' });
        const villaCount = await hotel.countDocuments({ type: 'villa' });
        const cabinCount = await hotel.countDocuments({ type: 'cabin' });
        res.status(200).json([
            {type: 'hotel', count: hotelCount},
            {type: 'appartment', count: appartmentCount},
            {type: 'resort', count: resortCount},
            {type: 'villa', count: villaCount},
            {type: 'cabin', count: cabinCount},
        ])
    } catch (err) {
        next(err)
    }
}


export const getHotelRooms = async (req, res, next) =>{
    try{
        const hotel = await hotel.findById(req.params.id)
        const list = await promise.all(hotel.rooms.map(room => {
            return rooms.findById(room)
        }))
        res.status(200).json(list)
    }catch(err){
        next(err)
    }
}