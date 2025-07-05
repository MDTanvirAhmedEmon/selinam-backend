import { Router } from 'express'
import { transactionController } from './transaction.controller'

const router = Router()

router.post('/create', transactionController.createTransaction)

router.get('/recent-cost', transactionController.getSpecificRecentCost)
// router.delete('/:id', categoryController.deleteCategory)
// router.patch('/:id', upload.single('file'), categoryController.updateCategory)

export const TransactionRouter = router
