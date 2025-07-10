import Order from "../models/Order.model.js";
import User from "../models/user.model.js";

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json({success: true, message: "All orders have been fetched", data: orders});
    } catch (error) {
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const getAllOrdersFromUser = async (req, res) => {
    const {user} = req.body;
    try {
        const foundUser = await User.findById(user._id).populate({
            path: 'orders',
            populate: { path: 'product' } // populate product inside each order
          });
          
        const orders = foundUser.orders;
        res.status(200).json({success: true, message: "All orders have been fetched", data: orders});
    } catch (error) {
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}


export const addOrder = async (req, res) => {
    const {user, requestedOrder} = req.body;

    try {
        const foundUser = await User.findById(user._id);
        if (!foundUser) {
            return res.status(404).json({success: false, message: "User not found with this ID"});
        }

        const newOrder = new Order({...requestedOrder, buyer: foundUser._id});
        await newOrder.save();

        foundUser.orders.push(newOrder._id);
        await foundUser.save();

        await newOrder.populate('product');
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

      // Remove reference from user
      await User.findByIdAndUpdate(order.buyer, {
        $pull: { orders: _id }
      });
  
      res.status(200).json({ success: true, message: "order deleted successfully" });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server er bhitre jhamela" });
    }
};
  

export const getCartOrders = async (req, res) => {
    const { user } = req.body;

    try {
        const populatedUser = await User.findById(user._id)
        .populate({
          path: 'orders',
          populate: { path: 'product' }  // This populates the product field inside each order
        });
      
      const orders = populatedUser.orders.filter((order) => order.state === 'in cart');

      res.status(200).json({ success: true, message: "Cart orders fetched", data: orders });
    } catch (error) {
        
      res.status(500).json({ success: false, message: "Server er bhitre jhamela", error: error.message });
    }
};
  