import React from "react";
import AddUserForm from "../../_components/add-user-form";

export default function AddUserPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="min-w-[480px]">
        <AddUserForm />
      </div>
    </div>
  );
}
