import React from "react";

type LoginProps = {
  base: "login" | "register";
};
function Login({ base }: LoginProps) {
  return <div>{base === "login" ? "login" : "register"}</div>;
}

export default Login;
