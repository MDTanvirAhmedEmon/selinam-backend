import { Types } from "mongoose";

export type ICategory = {
    name: string;
    type: "income" | "expenses"
    userId: Types.ObjectId;
    categoryImage?: string;
}