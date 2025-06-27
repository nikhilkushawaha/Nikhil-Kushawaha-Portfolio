const Review = require('../models/Review');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error('❌ Error fetching reviews:', error.message);
    res.status(500).json({ message: 'Error fetching reviews', error: error.message });
  }
};

exports.createReview = async (req, res) => {
  const { name, rating, comment } = req.body;
  if (!name || !rating || !comment) {
    return res.status(400).json({ message: 'Missing required fields: name, rating, comment' });
  }

  try {
    const review = new Review({
      name,
      rating,
      comment,
      photoUrl: req.file?.path || '', // Cloudinary returns .path
    });

    const saved = await review.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('❌ Error creating review:', error.message);
    res.status(500).json({ message: 'Error creating review', error: error.message });
  }
};
