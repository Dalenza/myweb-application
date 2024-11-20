"use server";
import { prisma } from "@/lib/db";

type CreateUserDto = {
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
};

export async function findAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return { success: users };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function createUser(data: CreateUserDto) {
  try {
    await prisma.user.create({
      data,
    });
    return { success: "User created successfully" };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({
      where: {
        id,
      },
    });
    return { success: "User deleted successfully" };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function findUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error: any) {
    return null;
  }
}
