import UserSidebar from "@/components/dashboard/UserSidebar";

const layout = ({ children }) => {
  return (
    <div className="flex">

      <UserSidebar />

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
};

export default layout;