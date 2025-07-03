import { ITransaction } from "./transaction.interface";
import { Transaction } from "./transaction.model";


const createTransaction = async (data: ITransaction): Promise<ITransaction> => {
    const result = await Transaction.create(data)
    return result;
}


export const transactionServices = {
    createTransaction,
}