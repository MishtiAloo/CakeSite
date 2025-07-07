import Order from "../models/Order.model.js";

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json({success: true, message: "All orders have been fetched", data: orders});
    } catch (error) {
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const addOrder = async (req, res) => {
    const requestedOrder = req.body;
    const newOrder = new Order(requestedOrder);

    try {
        await newOrder.save();
        res.status(201).json({success: true, message: "Order added successfully", data: newOrder});
    } catch (error) {
            res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const updateOrder = async (req, res) => {
    const {_id, ...rest} = req.body;

    try {
        let order = await Order.findById(_id);
        if (!order) {
            return res.status(404).json({success: false, message: "Bhul id diso, ei id er kisu nai"});
        }


        //findByIdandUpdate wont do validation, so discriminated enums get silently ignored thus enum attributes dont get updated if u use that function. use save() instead. it runs validations again (doc stays same means the old ID is preserved)

        Object.assign(order, rest);
        await order.save();

        res.status(200).json({success: true, message: "order updated successfully", data: order});
    } catch (error) {
        res.status(500).json({success: false, message: "Server er bhitre jhamela", error: error.message});
    }
};


export const deleteOrder = async (req, res) => {
    const { _id } = req.body;
  
    try {
      const order = await Order.findById(_id);
  
      if (!order) {
        return res.status(404).json({ success: false, message: "order not found" });
      }
  
      await order.deleteOne();
  
      res.status(200).json({ success: true, message: "order deleted successfully" });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server er bhitre jhamela" });
    }
};
  