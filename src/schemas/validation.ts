import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("Invalid email address!");

// create a username schema that requires a string, has a minimum length of 3 characters, and must not containe special characters and spaces (e.g. john.doe)
export const usernameSchema = z
  .string()
  .trim()
  .min(3, "Username must be at least 3 characters long!")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "username must not contain special characters or spaces!"
  );

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long!")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]+$/,
    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character!"
  );

export type SignupFormValues = z.infer<typeof signupSchema>;
export const signupSchema = z.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});
export type SigninFormValues = z.infer<typeof signinSchema>;
export const signinSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required!"),
});

export type AddUserFormValues = z.infer<typeof addUserSchema>;
export const addUserSchema = z.object({
  firstName: z.string().min(1, "First name is required!"),
  lastName: z.string().min(1, "Last name is required!"),
  email: emailSchema,
  phoneNumber: z.string().min(8, "Phone number is required!"),
  password: passwordSchema,
  role: z.string().min(1, "Role is required!"),
});
