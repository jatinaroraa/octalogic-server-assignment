const bookingModel = require("./bookings.model");

const createBooking = async (req, res) => {
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
