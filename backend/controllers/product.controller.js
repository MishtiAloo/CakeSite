import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({success: true, message: "All products have been fetched", data: products});
    } catch (error) {
        res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const addProduct = async (req, res) => {
    const requestedProduct = req.body;

    const newProduct = new Product(requestedProduct);

    try {
        await newProduct.save();
        res.status(201).json({success: true, message: "Product added successfully", data: newProduct});
    } catch (error) {
            res.status(500).json({success: false, message: "Server er bhitre jhamela"});
    }
}

export const updateProduct = async (req, res) => {
    const {_id, ...rest} = req.body;

    try {
        let product = await Product.findById(_id);
        if (!product) {
            return res.status(404).json({success: false, message: "Bhul id diso, ei id er kisu nai"});
        }


        //findByIdandUpdate wont do validation, so discriminated enums get silently ignored thus enum attributes dont update if u use that function. use save() instead. it runs validations again (doc stays same means the old ID is preserved)

        Object.assign(product, rest);
        await product.save();

        res.status(200).json({success: true, message: "Product updated successfully", data: product});
    } catch (error) {
        res.status(500).json({success: false, message: "Server er bhitre jhamela", error: error.message});
    }
};


export const deleteProduct = async (req, res) => {
    const { _id } = req.body;
  
    try {
      const product = await Product.findById(_id);
  
      if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      await product.deleteOne();
  
      res.status(200).json({ success: true, message: "Product deleted successfully" });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Server er bhitre jhamela" });
    }
};
  