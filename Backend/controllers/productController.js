import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import productModel from "../models/productModel.js"


const IMG_BB_API_KEY = process.env.IMG_BB_API_KEY;

// Function for adding product with image upload to ImgBB
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subcategory, sizes, bestseller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                const filePath = item.path; // The full file path provided by multer

                // Read image file as buffer
                const fileBuffer = fs.readFileSync(filePath);

                // Prepare the form data to send to ImgBB API
                const formData = new FormData();
                formData.append('image', fileBuffer, item.originalname);

                // Send request to ImgBB API
                const result = await axios.post('https://api.imgbb.com/1/upload', formData, {
                    params: {
                        key: IMG_BB_API_KEY
                    },
                    headers: formData.getHeaders(),
                });

                // Return the image URL from ImgBB
                return result.data.data.url;
            })
        );

        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subcategory,
            bestseller: bestseller == "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()
        

        res.json({success:true, messages:"Product Added"});
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};





// function for listing product
const listProducts = async (req,res) => {
    try {
        const products = await productModel.find({});
        res.json({sucess:true,products})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// function for removing product
const removeProduct = async (req,res) => {
    try {
        const {id} = req.body
        await productModel.findByIdAndDelete(id)
        res.json({success:true,message:"Product Removed"})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}



// function for single product info
const singleProduct = async (req,res) => {
    try {
        const {id} = req.body
        const product = await productModel.findById(id)
        res.json({sucess:"true",message:product})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export {addProduct,listProducts,removeProduct, singleProduct}