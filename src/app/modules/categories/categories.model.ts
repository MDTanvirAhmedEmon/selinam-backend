import mongoose, { model, Schema } from "mongoose";
import { ICategory } from "./categories.interface";

const categoriesSchema = new Schema<ICategory>(
    {
        name: { type: String, required: true },
        type: { type: String, enum: ['income', 'expenses'], },
        // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        categoryImage: { type: String },
    },
    { timestamps: true }
);


export const Category = model<ICategory>('Category', categoriesSchema);