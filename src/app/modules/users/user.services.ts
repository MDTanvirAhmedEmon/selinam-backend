import AppError from '../../errors/AppError';
import { sendEmail } from '../../utils/sendEmail';
import { IUser } from "./user.interface";
import { User } from "./user.model"

const createUser = async (validateUser: Partial<IUser>): Promise<any> => {

    validateUser.role = "user";
    validateUser.status = "in-progress";

    const isExist = await User.findOne({ email: validateUser?.email })
    console.log(isExist)
    if (isExist) {
        throw new AppError(400, 'User already exists!')
    }

    const resetToken = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit random number
    validateUser.accountVerifiedToken = resetToken
    const result = await User.create(validateUser);

    sendEmail(result?.email, resetToken)
    return {
        message: "Check your email for verification code",
        result
    };
}

export const userServices = {
    createUser,
}