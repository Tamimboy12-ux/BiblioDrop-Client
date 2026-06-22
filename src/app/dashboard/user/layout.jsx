import UserSidebar from "@/components/dashboard/UserSidebar";

const layout = ({ children }) => {
  return (
    <div className="flex mt-20">

      <UserSidebar />

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
};

export default layout;