import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Transactions from "./pages/Transactions";
import Profile from "./pages/Profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "login",
      element: <Login base="login" />,
    },
    {
      path: "register",
      element: <Login base="register" />,
    },
    {
      path: "/",
      element: <ProtectedRoutes />,
      children: [
        {
          index: true,
          element: <DashBoard />,
        },
        {
          path: "transaction",
          element: <Transactions />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  return (
    <div className="jetbrain-font">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
