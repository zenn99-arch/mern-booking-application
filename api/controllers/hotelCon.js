import hotel from "../models/hotel.js"

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
    const failed = true

    try {
        const findAllhotels = await hotel.find()
        res.status(200).json(findAllhotels)
    } catch (err) {
        next(err)
    }
}