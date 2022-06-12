import { profileEnd } from "console";
import mongoose, { Schema } from "mongoose";

export interface ProductType {
  gender: string;
  category: string;
  style: string;
  price: number;
  color: string;
  mainImg: string;
  altImg: string[];
  sizes: {
    size: number | string;
    stock: number;
  }[];
}

const productSchema = new Schema<ProductType>({
  gender: {
    type: String,
    enum: ["mens", "womens", "unisex"],
    required: true,
  },
  category: { type: String, required: true },
  style: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  mainImg: { type: String, required: true },
  altImg: { type: [String], required: true },
  sizes: {
    type: [
      {
        size: {
          type: Schema.Types.Mixed,
          enum: [
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL",
          ],
          required: true,
        },
        stock: { type: Number, required: true },
      },
    ],
    required: true,
  },
});

export default (mongoose.models.Product as mongoose.Model<
  ProductType,
  {},
  {},
  {}
>) || mongoose.model("Product", productSchema);
