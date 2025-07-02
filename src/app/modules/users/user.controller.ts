import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";
import { userValidationSchema } from "./user.validation";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body;
        const validateData = userValidationSchema.parse(data)

        const result = await userServices.createUser(validateData);
        res.status(200).json({
            success: true,
            message: result?.message,
            data: result?.result,
        })
        // sendResponse(res, {
        //     statusCode: httpStatus.OK,
        //     success: true,
        //     message: 'user created successfully',
        //     data: result,
        // });
    }
    catch (error) {
        next(error)
    }
}

export const userController = {
    createUser,
}