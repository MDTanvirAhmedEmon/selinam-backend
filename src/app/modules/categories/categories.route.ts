import { Router } from "express";
import { categoryController } from "./categories.controller";
import { upload } from "../../helpers/fileUploader";

const router = Router();

router.get('/', categoryController.getAllCategory)
router.post('/create', upload.single('file'), categoryController.createCategory)
router.delete('/:id', categoryController.deleteCategory)
router.patch('/:id', upload.single('file'), categoryController.updateCategory)

export const CategoryRouter = router;