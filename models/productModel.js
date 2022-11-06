import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    // mini_img: { type: String, required: true },
    details: { type: String, required: true },
    drive: { type: String, required: true },
    miles: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    manufac: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
