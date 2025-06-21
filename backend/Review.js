const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: false },
  photoUrl: { type: String, required: false }, // Store path or URL
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);
