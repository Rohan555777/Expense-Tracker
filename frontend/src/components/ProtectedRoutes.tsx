import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function ProtectedRoutes() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <Sidebar />

      <div className="md:ml-64">
        <Navbar />

        <main className="p-4 md:p-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ProtectedRoutes;
