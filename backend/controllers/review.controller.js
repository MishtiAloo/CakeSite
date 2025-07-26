import Review from "../models/review.model.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res
      .status(200)
      .json({
        success: true,
        message: "All reviews have been fetched",
        data: reviews,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server er bhitre jhamela" });
  }
};

// Add a new review
export const addReview = async (req, res) => {
  const requestedReview = req.body;

  const newReview = new Review(requestedReview);

  try {
    await newReview.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Review added successfully",
        data: newReview,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server er bhitre jhamela" });
  }
};
