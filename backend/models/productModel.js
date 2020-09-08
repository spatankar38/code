import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id:{ type: String, required: false},
    name:{ type: String, required: true},
    imageUrl:{ type: String, required: true},
    price:{ type: Number, default: 0, required: true},
    madeBy:{ type: String, required: true},
    category:{ type: String, required: true},
    countInStock:{ type: Number, default: 0, required: true},
    description:{ type: String, required: true},
    rating:{ type: Number, default:0, required: false},
    reviews:{ type: Number, default:0, required: false},
})

const productModel = mongoose.model("Product", productSchema);

export default productModel;