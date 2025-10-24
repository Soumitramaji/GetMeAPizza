"use server"

import Razorpay from "razorpay";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDb";
import User from "@/models/User";


export const initiate = async (amount, to_username, paymentform) => {
  await connectDB();

  const user = await User.findOne({ username: to_username });
  if (!user) throw new Error("Recipient user not found");

  if (!amount || isNaN(amount)) throw new Error("Invalid or missing amount");
  if (!to_username) throw new Error("Missing recipient username");
  if (!paymentform?.name || typeof paymentform.name !== "string")
    throw new Error("Missing payer name");
  if (!paymentform?.message || typeof paymentform.message !== "string")
    throw new Error("Missing payment message");

  const instance = new Razorpay({
    key_id: user.razorpayid || process.env.NEXT_PUBLIC_KEY_ID,
    key_secret: user.razorpaysecret || process.env.KEY_SECRET,
  });

  const options = {
    amount: parseInt(amount) * 100,
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
    notes: {
      name: paymentform.name,
      message: paymentform.message,
    },
  };

  const order = await instance.orders.create(options);


  await Payment.create({
    oid: order.id,
    amount,
    to_user: to_username,
    name: paymentform.name,
    message: paymentform.message,
    done: false, 
  });

  return order;
};


export async function fetchuser(username) {
  await connectDB();
  const user = await User.findOne({ username });
  return JSON.parse(JSON.stringify(user));
}


export async function fetchpayments(username) {
  await connectDB();
  const payments = await Payment.find({ to_user: username, done: true });
  return JSON.parse(JSON.stringify(payments));
}


export const updateProfile = async (ndata, oldusername) => {
  await connectDB();

  
  if (ndata.username && ndata.username !== oldusername) {
    const existingUser = await User.findOne({ username: ndata.username });
    if (existingUser) {
      return { success: false, error: "Username already exists" };
    }

    
    await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username });
  }

  
  const result = await User.updateOne({ username: oldusername }, ndata);

  if (result.modifiedCount === 0) {
    return { success: false, error: "No changes made" };
  }

  return { success: true, result };
};
