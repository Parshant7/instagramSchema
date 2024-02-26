import { Schema } from "mongoose";

export const OtpSchema = new Schema({
  user_id: { type: Schema.ObjectId, ref: 'Users' },
  pin: String,
  created_at: Date,
  expires_at: Date,
  otp_type: {
    type: String,
    enum: ["EmailVerification", "PhoneVerification", "ResetPassword"],
  },
  is_verified: { type: Boolean, default: false },
});
