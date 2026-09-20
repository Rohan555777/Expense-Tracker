import { LayoutDashboard, ArrowLeftRight, User, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col bg-[#172236] px-4 py-6 text-white md:flex">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="text-2xl">💳</div>

        <span className="text-xl font-bold">ExpenseTracker</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex h-14 items-center gap-4 rounded-xl px-4 transition ${
              isActive ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-[#263653] hover:text-white"
            }`
          }
        >
          <LayoutDashboard size={21} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/transaction"
          className={({ isActive }) =>
            `flex h-14 items-center gap-4 rounded-xl px-4 transition ${
              isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-[#263653] hover:text-white"
            }`
          }
        >
          <ArrowLeftRight size={21} />
          <span>Transactions</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex h-14 items-center gap-4 rounded-xl px-4 transition ${
              isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-[#263653] hover:text-white"
            }`
          }
        >
          <User size={21} />
          <span>Profile</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <button className="mt-auto flex h-14 items-center gap-4 rounded-xl px-4 text-gray-300 transition hover:bg-[#263653] hover:text-white">
        <LogOut size={21} />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;
