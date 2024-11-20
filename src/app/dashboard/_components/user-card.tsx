"use client";
import { deleteUser } from "@/actions/user";
import { Button } from "@/components/ui/button";
import { FaX } from "react-icons/fa6";
import { toast } from "sonner";

type UserCardProps = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
  };
};
export default function UserCard({ user }: UserCardProps) {
  const handleDelete = async () => {
    const data = await deleteUser(user.id);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.success);
    }
  };

  return (
    <div className="flex p-3 border shadow-lg w-fit items-center">
      <div className="border-r px-2">{user.firstName}</div>
      <div className="border-r px-2">{user.lastName}</div>
      <div className="border-r px-2">{user.email}</div>
      <div className="border-r px-2">{user.phoneNumber}</div>
      <div className="border-r px-2">{user.password}</div>
      <div className="">
        <Button onClick={handleDelete} size="icon" variant="ghost">
          <FaX className="text-red-400" />
        </Button>
      </div>
    </div>
  );
}
