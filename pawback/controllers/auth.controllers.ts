import mongoose from "mongoose";
export const signUp = async (req, res, next) => {
  // Implement sign up logic

  const session = await mongoose.startSession();
  session.startTransaction();
};

export const signIn = async (req, res, next) => {
  // Implement sign in logic here
};

export const signOut = async (req, res, next) => {
  // Implement sign out logic here
};
