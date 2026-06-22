import LibrarianSidebar from "@/components/dashboard/LibrarianSidebar";

const layout = ({ children }) => {
  return (
    <div className="flex mt-20">

      <LibrarianSidebar />

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
};

export default layout;