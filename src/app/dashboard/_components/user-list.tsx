"use client";
import { findAllUsers } from "@/actions/user";
import { User } from "@prisma/client";
import React, { useEffect, useState } from "react";
import UserCard from "./user-card";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await findAllUsers();
      if (data.success) {
        setUsers(data.success);
      }
    };
    fetchUsers();
  }, []);
  return users.map((user) => {
    const data = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber || "",
      password: user.password,
    };
    return <UserCard key={user.id} user={data} />;
  });
}
