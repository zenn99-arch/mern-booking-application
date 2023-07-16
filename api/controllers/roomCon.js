import hotel from "../models/hotel.js";
import room from "../models/room.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
  const newRoom = new room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
          await hotel.findByIdAndUpdate(hotelId, {
            $push: { rooms: savedRoom._id },
          });
        } catch (err) {
          next(err);
        }
        res.status(200).json(savedRoom);
      } catch (err) {
        next(err);
      }
    };

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await room.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedRoom);
      } catch (err) {
        next(err);
      }
    };

    export const updateRoomAvailability = async (req, res, next) => {
        try {
          await room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
              $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
              },
            }
          );
          res.status(200).json("Room status has been updated.");
        } catch (err) {
          next(err);
        }
      };
      export const deleteRoom = async (req, res, next) => {
        const hotelId = req.params.hotelid;
        try {
          await room.findByIdAndDelete(req.params.id);
          try {
            await hotel.findByIdAndUpdate(hotelId, {
              $pull: { rooms: req.params.id },
            });
          } catch (err) {
            next(err);
          }
          res.status(200).json("Room has been deleted.");
        } catch (err) {
          next(err);
        }
      };
      export const getRoom = async (req, res, next) => {
        try {
          const room = await room.findById(req.params.id);
          res.status(200).json(room);
        } catch (err) {
          next(err);
        }
      };
      export const getAllRoom = async (req, res, next) => {
        try {
          const rooms = await room.find();
          res.status(200).json(rooms);
        } catch (err) {
          next(err);
        }
      };