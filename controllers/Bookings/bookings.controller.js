const {
  bookingSchema,
  vechicleIdSchema,
} = require("../../validation/Bookings");
const bookingModel = require("./bookings.model");

const createBooking = async (req, res) => {
  const { error } = bookingSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      error: error.details[0].message,
    });
  }
  const {
    userFirstName,
    userLastName,
    type,
    model,
    wheels,
    vechicleId,
    bookingStartDate,
    bookingEndDate,
  } = req.body;

  const newBooking = await bookingModel.create({
    userFirstName,
    userLastName,
    type,
    model,
    wheels,
    vechicleId,
    bookingStartDate,
    bookingEndDate,
  });

  return res.status(201).json({
    message: "Booking created successfully",
    data: newBooking,
  });
};

const getBookingDate = async (req, res) => {
  const { error } = vechicleIdSchema.validate(req.query);
  if (error) {
    return res.status(400).json({
      message: "Validation failed",
      error: error.details[0].message,
    });
  }
  const { vechicleId } = req.query;
  const bookings = await bookingModel.findAll({
    attributes: ["bookingStartDate", "bookingEndDate"],
    where: { vechicleId },
  });

  return res.json({ data: bookings });
};

module.exports = {
  createBooking,
  getBookingDate,
};
