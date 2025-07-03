import { NextFunction, Request, Response } from "express";
import { transactionServices } from "./transaction.services";

const createTransaction = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = req.body
        const result = await transactionServices.createTransaction(data)

        res.status(200).json({
            success: true,
            message: 'transaction created successfully',
            result,
        })
    }
    catch (error) {
        next(error)
    }
}


export const transactionController = {
    createTransaction,
}