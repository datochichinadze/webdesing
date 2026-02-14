"use client";
import { useState } from "react";
import Button from "../component/button/Button";
import Input from "../component/input/Input";
import styles from "./Login.module.css";
import Image from "next/image";
import { pageEnum, usePage } from "../globalStates";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "./interfase/login-interfase-props";
import { schema } from "./schema/schema";
import { ErrorMessage } from "./error/ErrorMessage";
import axios from "axios";
import { useRouter } from "next/navigation";

interface LoginProps {
  currentItem?: LoginFormValues;
}

const Login = ({ currentItem }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const setPage = usePage((state) => state.setPage);
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: yupResolver(schema),
    defaultValues: currentItem,
    mode: "onChange",
    criteriaMode: "all",
  });

  const onLogin = async (data: LoginFormValues) => {
    // const formData = new FormData();
    // formData.append("email", data.email);
    // formData.append("password", data.password);

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        data,
      );

      const { accessToken, refreshToken } = response.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      router.push("/main");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.becground}>
      <div className={styles.container}>
        <div className={styles.headerImageAndText}>
          <Image
            src="/porsche.png"
            alt="photo"
            width={70}
            height={70}
            style={{ cursor: "pointer" }}
          />
          <p className={styles.welcomeParagrap}>Welcome</p>
        </div>
        <form
          className={styles.formContainer}
          onSubmit={form.handleSubmit(onLogin)}
        >
          <div>
            <Input
              placeholder="Email"
              type="Email"
              {...form.register("email")}
            />
            {form.formState.errors?.email && (
              <ErrorMessage>
                {form.formState.errors?.email.message}
              </ErrorMessage>
            )}
          </div>
          <div className={styles.inputImageStyle}>
            <Input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              {...form.register("password")}
            />
            {form.formState.errors?.password && (
              <ErrorMessage>
                {form.formState.errors?.password.message}
              </ErrorMessage>
            )}
            <Image
              src={showPassword ? "/active.svg" : "/hide.svg"}
              alt="photo"
              className={styles.hideAndActiveStyle}
              width={24}
              height={24}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <Button type="submit" title="Log in" />
        </form>
        <div className={styles.SignUpStyle}>
          <p className={styles.forgotParagrap}>Forgot Password ?</p>
          <p
            className={styles.signParagrap}
            onClick={() => setPage(pageEnum.REGISTER)}
          >
            Sign Up
          </p>
        </div>
        <div className={styles.orContainer}>
          <div className={styles.orImages}>
            <p style={{ color: "#CDBECE" }}>OR LOGIN WITH</p>
            <div>
              <Image
                src="/google.svg"
                alt="photo"
                width={70}
                height={40}
                style={{ cursor: "pointer" }}
              />
              <Image
                src="/facebook.png"
                alt="photo"
                width={70}
                height={40}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
