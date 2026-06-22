import AdminSidebar from "@/components/dashboard/AdminSidebar";

const layout = ({ children }) => {
  return (
    <div className="flex mt-20">

      <AdminSidebar />

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
};

export default layout;