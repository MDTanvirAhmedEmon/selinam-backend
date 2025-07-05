import { Types } from 'mongoose'
import { Category } from '../categories/categories.model'
import { ITransaction } from './transaction.interface'
import { Transaction } from './transaction.model'

const createTransaction = async (data: ITransaction): Promise<ITransaction> => {
  const result = await Transaction.create(data)
  return result
}

const getSpecificRecentCost = async (query: any): Promise<ITransaction[]> => {
  const limit = Number(query.limit ? query.limit : 5)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const matchStage: any = { userId: new Types.ObjectId(query.userId) }

  if (query.type) {
    const categories = await Category.find({ type: query.type }).select('_id')
    const categoryIds = categories.map((category) => category._id)
    matchStage.categoryId = { $in: categoryIds }
  }

  const result = await Transaction.aggregate([
    {
      $match: matchStage, // Apply the query condition
    },
    {
      $lookup: {
        from: 'categories',
        localField: 'categoryId',
        foreignField: '_id',
        as: 'category',
      },
    },
    {
      $addFields: {
        category: { $arrayElemAt: ['$category', 0] }, // Extract the first element from the array
      },
    },
    {
      $sort: { createdAt: -1 }, // Sort by `createdAt` in descending order to get the most recent
    },
    {
      $limit: limit, // Limit to 1 result, which is the most recent transaction
    },
  ])

  return result
}

export const transactionServices = {
  createTransaction,
  getSpecificRecentCost,
}
