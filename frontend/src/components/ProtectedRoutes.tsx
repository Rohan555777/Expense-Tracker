import React from "react";
import { Outlet } from "react-router-dom";

function ProtectedRoutes() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedRoutes;
