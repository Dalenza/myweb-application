import AddUserBtn from "./_components/add-user-btn";
import UserList from "./_components/user-list";

export default function DashboardPage() {
  return (
    <div className="min-h-screen max-w-screen-md mx-auto py-20 flex flex-col gap-4">
      <AddUserBtn />
      <UserList />
    </div>
  );
}
