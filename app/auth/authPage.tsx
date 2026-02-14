"use client";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import { pageEnum, usePage } from "../globalStates";
const AuthPage = () => {
  const page = usePage(state => state.page);

  return page === pageEnum.LOGIN ? <Login /> : <Signup />;
};

export default AuthPage;
