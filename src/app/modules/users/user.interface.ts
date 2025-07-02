
export type IUser = {
    email: string;
    password: string;
    passwordChangedAt?: Date;
    role: "user";
    fullName: string;
    address?: string;
    gender?: 'male' | 'female' | 'others';
    contactNo?: string
    profileImageUrl?: string
    status: 'in-progress' | 'blocked';
    accountVerified: boolean;
    accountVerifiedToken: string;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
}