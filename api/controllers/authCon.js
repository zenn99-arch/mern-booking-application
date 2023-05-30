import user from "../models/user.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import  Jwt  from "jsonwebtoken";

export const registerUser = async(req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new user({
            ...req.body,
            password: hash,
        })

       await  newUser.save()
        res.status(200).send('user created')
    }catch(err){
        next(err)
    }
}

export const login = async(req, res, next) => {
    try{
      const getUser = await user.findOne({userName: req.body.username})
        if(!getUser) return next(createError(404, 'user not found'))
        
        const isPasswordCorrect = await bcrypt.compare(req.body.password, getUser.password)
        if(!isPasswordCorrect) return next(createError(400, 'wrong password or username'))

        const token = Jwt.sign({id: getUser._id, isAdmin: getUser.isAdmin }, process.env.JWT_KEY)

        const {password, isAdmin, ...otherDetails} = getUser._doc;
        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({details: {...otherDetails}, isAdmin});

    }catch(err){
        next(err)
    }
}
