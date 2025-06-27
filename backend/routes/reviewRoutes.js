const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../utils/cloudinary');
const upload = multer({ storage });

const {
  getReviews,
  createReview,
} = require('../controllers/reviewController');

router.get('/', getReviews);
router.post('/', upload.single('photo'), createReview);

module.exports = router;
