import { NextFunction, Request, Response } from 'express'
import { transactionServices } from './transaction.services'

const createTransaction = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body
    const result = await transactionServices.createTransaction(data)

    res.status(200).json({
      success: true,
      message: 'transaction created successfully',
      result,
    })
  } catch (error) {
    next(error)
  }
}

const getSpecificRecentCost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const query = req.query
    const result = await transactionServices.getSpecificRecentCost(query)

    res.status(200).json({
      success: true,
      message: 'get specific recent transaction successfully',
      result,
    })
  } catch (error) {
    next(error)
  }
}

export const transactionController = {
  createTransaction,
  getSpecificRecentCost,
}
