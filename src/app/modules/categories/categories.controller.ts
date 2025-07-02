import { NextFunction, Request, Response } from "express";
import { categoryServices } from "./categories.services";

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const data = JSON.parse(req.body.data)
        const file = req.file
        const result = await categoryServices.createCategory(data, file)

        res.status(200).json({
            success: true,
            message: 'category created successfully',
            result,
        })
    }
    catch (error) {
        next(error)
    }
}

const getAllCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const query = req.query
        console.log('my query', query);
        const result = await categoryServices.getAllCategory(query)

        res.status(200).json({
            success: true,
            message: 'retrieve all category successfully',
            result,
        })
    }
    catch (error) {
        next(error)
    }
}

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result = await categoryServices.deleteCategory(id)

        res.status(200).json({
            success: true,
            message: 'deleted category successfully',
            result,
        })
    }
    catch (error) {
        next(error)
    }
}

const updateCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const data = JSON.parse(req.body.data)
        const file = req.file

        const result = await categoryServices.updateCategory(id, data, file)

        res.status(200).json({
            success: true,
            message: 'updated category successfully',
            result,
        })
    }
    catch (error) {
        next(error)
    }
}

export const categoryController = {
    createCategory,
    getAllCategory,
    deleteCategory,
    updateCategory,
}