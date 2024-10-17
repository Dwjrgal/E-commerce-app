import { model, Schema } from "mongoose";

interface IList {
  user: Schema.Types.ObjectId;
  products: [
    { product: Schema.Types.ObjectId; quantity: Number; price: Number }
  ];
  totalAmount: Number;
}
const wishListSchema = new Schema<IList>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const wishList = model<IList>("List", wishListSchema);
export default wishList;
