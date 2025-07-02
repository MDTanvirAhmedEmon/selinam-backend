import AppError from "../../errors/AppError"
import { ICategory } from "./categories.interface"
import { Category } from "./categories.model"

const createCategory = async (data: Partial<ICategory>, file: any): Promise<ICategory> => {
    const isExist = await Category.findOne({
        "name": { $regex: new RegExp(`^${data?.name}$`, 'i') },
        "type": data?.type,
    })
    if (isExist) {
        throw new AppError(404, "Category Already Exist!")
    }

    if (file) {
        data.categoryImage = `/uploads/${file.filename}`;
    }
    else {
        throw new AppError(404, "category image is required!")
    }


    const result = await Category.create(data)
    return result;
}

const getAllCategory = async (query: any): Promise<ICategory[]> => {
    const filter = query ? query : {}
    console.log('filter', filter);
    const result = await Category.find(filter);
    return result;
}

const deleteCategory = async (id: any): Promise<ICategory | null> => {
    const result = await Category.findByIdAndDelete(id);
    return result;
}

const updateCategory = async (id: any, data: Partial<ICategory>, file:any): Promise<ICategory | null> => {

    if (file) {
        data.categoryImage = `/uploads/${file.filename}`;
    }
    const result = await Category.findByIdAndUpdate(id, data, { new: true });
    return result;
}

export const categoryServices = {
    createCategory,
    getAllCategory,
    deleteCategory,
    updateCategory,
}