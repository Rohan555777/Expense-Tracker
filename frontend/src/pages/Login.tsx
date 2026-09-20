import loginBg from "../assets/Login.jpg";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { fetchPostApi } from "../utils/api.js";

type LoginProps = {
  base: "login" | "register";
};
function Login({ base }: LoginProps) {
  const [showPass, setShowPass] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = base === "login";
  const navigate = useNavigate();

  async function handleAuth(e: Event) {
    try {
      e.preventDefault();

      const data = {
        firstName,
        lastName,
        password,
        email,
      };
      const path = isLogin ? "/login" : "/register";
      const res = await fetchPostApi(path, data);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div
      className=" w-full h-screen bg-cover bg-center bg-no-repeat flex-col flex justify-center items-center
    "
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <h2 className="text-4xl mb-10 font-bold text-shadow-2xs capitalize">{base}</h2>
      <form
        onSubmit={handleAuth}
        action="submit"
        className="flex justify-center items-center flex-col px-6 py-12 gap-5 lg:w-xs bg-green-300/20 rounded-2xl backdrop-blur-xs"
      >
        {!isLogin && (
          <input
            className="w-full px-3 py-2 text-sm text-slate-800 bg-white border border-slate-300 rounded-lg shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="FirstName"
            required
          />
        )}
        {!isLogin && (
          <input
            className="w-full px-3 py-2 text-sm text-slate-800 bg-white border border-slate-300 rounded-lg shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="LastName"
            required
          />
        )}
        <input
          className="w-full px-3 py-2 text-sm text-slate-800 bg-white border border-slate-300 rounded-lg shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <div className="relative  text-sky-800 bg-white w-full border-slate-300 rounded-lg shadow-sm ">
          <div
            className=" absolute right-3 bottom-1.5 cursor-pointer"
            onClick={() => {
              setShowPass((prev) => !prev);
            }}
          >
            {showPass ? <Eye /> : <EyeClosed />}
          </div>
          <input
            className="w-full px-3 py-2 text-sm text-slate-800 bg-white border border-slate-300 rounded-lg shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors duration-200"
            type={`${showPass ? "text" : "password"}`}
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button className=" px-5 py-2 bg-linear-to-br from-orange-600 to-orange-200 rounded-xl hover:from-green-200 hover:to-green-600 transition-all duration-300 cursor-pointer hover:shadow-lg shadow-orange-600 active:from-green-800 ">
          {base}
        </button>
        <p className="mt-2">
          {isLogin ? "new On this " : "you know us "}
          <Link
            to={`${isLogin ? "/register" : "/login"}`}
            className="cursor-pointer transition-all duration-300  hover:text-green-500 text-shadow-xs hover:text-shadow-orange-600 border-b"
          >
            {isLogin ? "Register" : "Login"}
          </Link>{" "}
          Please
        </p>
      </form>
    </div>
  );
}

export default Login;
