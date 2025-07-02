import { Types } from "mongoose";

export type ITransaction = {
    amount: number;
    categoryId: Types.ObjectId;
    description?: string;
    userId: Types.ObjectId;
}