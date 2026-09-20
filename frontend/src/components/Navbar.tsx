import { Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:h-[70px] md:px-7">
      {/* Mobile Logo */}
      <div className="flex items-center gap-2 md:hidden">
        <span className="text-xl">💳</span>

        <span className="font-bold text-gray-900">ExpenseTracker</span>
      </div>

      {/* Desktop empty space */}
      <div className="hidden md:block" />

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="flex items-center justify-center rounded-full p-2 text-gray-600 hover:bg-gray-100">
          <Bell size={20} />
        </button>

        {/* User */}
        <div className="flex cursor-pointer items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
            RK
          </div>

          <span className="hidden font-semibold text-gray-900 md:block">Rohan Kharat</span>

          <ChevronDown size={18} className="hidden text-gray-600 md:block" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
