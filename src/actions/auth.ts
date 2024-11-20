"use server";
import { SigninFormValues } from "@/schemas/validation";
import { findUserByEmail } from "./user";

export async function signIn(formValues: SigninFormValues) {
  const { email, password } = formValues;
  const user = await findUserByEmail(email);
  if (!user) {
    return {
      error: "user not found",
    };
  }
  if (user.password !== password) {
    return {
      error: "password is incorrect",
    };
  }
  return {
    success: "user signed in successfully",
  };
}
