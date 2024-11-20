"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AddUserBtn() {
  return (
    <Button className="w-fit">
      <Link href="/dashboard/user/add">new user</Link>
    </Button>
  );
}
