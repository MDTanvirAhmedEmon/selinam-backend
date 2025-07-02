import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt';

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: ['user'],
      default: 'user',
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
    },
    contactNo: {
      type: String,
    },
    profileImageUrl: {
      type: String,
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
      required: true,
    },
    accountVerified: {
      type: Boolean,
      default: false
    },
    accountVerifiedToken: {
      type: String,
      default: null,
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// mongoose pre middleware 

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds))

  next();
})

export const User = model<IUser>('User', userSchema);