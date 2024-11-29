const Joi = require("joi");

const bookingSchema = Joi.object({
  userFirstName: Joi.string().min(3).max(30).required(),
  userLastName: Joi.string().min(3).max(30).required(),
  type: Joi.string().valid("car", "bike", "truck").required(), // Example vehicle types
  model: Joi.string().min(3).required(),
  wheels: Joi.number().integer().min(2).required(), // assuming wheels can be at least 2
  vechicleId: Joi.string().required(), // or use Joi.number() if vechicleId is numeric
  bookingStartDate: Joi.date().iso().required(),
  bookingEndDate: Joi.date()
    .iso()
    .greater(Joi.ref("bookingStartDate"))
    .required(), // bookingEndDate must be after bookingStartDate
});

const vechicleIdSchema = Joi.object({
  vechicleId: Joi.string().required(), // Assuming vechicleId is a required string, you can change it to Joi.number() if needed
});
module.exports = {
  bookingSchema,
  vechicleIdSchema,
};
