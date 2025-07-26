import Offer from "../models/offer.model.js";

// Get all offers
export const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find({});
    res
      .status(200)
      .json({
        success: true,
        message: "All offers have been fetched",
        data: offers,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server er bhitre jhamela" });
  }
};

// Add a new offer
export const addOffer = async (req, res) => {
  const requestedOffer = req.body;

  const newOffer = new Offer(requestedOffer);

  try {
    await newOffer.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Offer added successfully",
        data: newOffer,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server er bhitre jhamela" });
  }
};

// Update an offer
export const updateOffer = async (req, res) => {
  const { _id, ...rest } = req.body;

  try {
    const offer = await Offer.findById(_id);

    if (!offer) {
      return res
        .status(404)
        .json({ success: false, message: "Offer not found" });
    }

    Object.assign(offer, rest);
    await offer.save();

    res
      .status(200)
      .json({
        success: true,
        message: "Offer updated successfully",
        data: offer,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server er bhitre jhamela" });
  }
};

// Delete an offer
export const deleteOffer = async (req, res) => {
  const { _id } = req.body;

  try {
    const offer = await Offer.findById(_id);

    if (!offer) {
      return res
        .status(404)
        .json({ success: false, message: "Offer not found" });
    }

    await offer.deleteOne();

    res
      .status(200)
      .json({ success: true, message: "Offer deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Server er bhitre jhamela" });
  }
};
