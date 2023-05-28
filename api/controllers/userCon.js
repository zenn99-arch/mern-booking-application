import user from "../models/user.js"

export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await user.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted")
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const findUser = await user.findByIdAndUpdate(req.params.id)
        res.status(200).json(findUser)
    } catch (err) {
        next(err)
    }
}

export const getAllUser = async (req, res, next) => {
    const failed = true

    try {
        const findAllUsers = await user.find()
        res.status(200).json(findAllUsers)
    } catch (err) {
        next(err)
    }
}