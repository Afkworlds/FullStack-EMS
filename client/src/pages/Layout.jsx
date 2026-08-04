import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-slate-50 via-white to-indigo-50/30">

      {/* <aside className="w-64 bg-white shadow-md p-6"> */}
        <p>
          Sidebar
        </p>
      {/* </aside> */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-4 pt-16 sm:p-6 sm:pt-6 lg:p-8 max-w-400 mx-auto">
          <Outlet />
        </div>
      </main>

    </div>
  );
};

export default Layout;