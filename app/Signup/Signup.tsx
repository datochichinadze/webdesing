"use client";
import { useState } from "react";
import Button from "../component/button/Button";
import Input from "../component/input/Input";
import styles from "./Signup.module.css";
import Image from "next/image";
import { pageEnum, usePage } from "../globalStates";
import { SignupFormValues } from "./interfase/signup-interfase-props";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "./error/ErrorMesage";
import { schema } from "./schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";

interface SignupProps {
  currentItem?: SignupFormValues;
}

const Signup = ({ currentItem }: SignupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [confrimShowPassword, setConfrimShowPassword] = useState(false);
  const setPage = usePage((state) => state.setPage);
  const router = useRouter();

  const form = useForm<SignupFormValues>({
    resolver: yupResolver(schema),
    defaultValues: currentItem,
    mode: "onChange",
    criteriaMode: "all",
  });

  const onRegister = async (data: SignupFormValues) => {
    // const formData = new FormData();
    // formData.append("email", data.email);
    // formData.append("password", data.password);
    // formData.append("RepeatPassword", data.repeatPassword);

    try {
      await axios.post("https://webdesinback.onrender.com/auth/register", data);

      router.push("/main");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          alert("Email already exists");
        }
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
          onSubmit={form.handleSubmit(onRegister)}
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

          <div className={styles.passwordAndTextStyle}>
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
              className={styles.passwordImageStyle}
              src={showPassword ? "/active.svg" : "/hide.svg"}
              alt="photo"
              width={24}
              height={24}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>

          <div className={styles.confimPasswordContainer}>
            <Input
              placeholder="Repeat Password"
              type={confrimShowPassword ? "text" : "password"}
              {...form.register("repeatPassword")}
            />
            {form.formState.errors.repeatPassword && (
              <ErrorMessage>
                {form.formState.errors.repeatPassword.message}
              </ErrorMessage>
            )}
            <Image
              className={styles.confrimPasswordStyle}
              src={confrimShowPassword ? "/active.svg" : "/hide.svg"}
              alt="photo"
              width={24}
              height={24}
              onClick={() => setConfrimShowPassword((prev) => !prev)}
            />
          </div>
          <Button type="submit" title="Sign up" />
        </form>
        <div className={styles.SignUpStyle}>
          <p
            className={styles.signParagrap}
            onClick={() => setPage(pageEnum.LOGIN)}
          >
            Log In
          </p>
        </div>
        <div className={styles.orContainer}>
          <div className={styles.orImages}>
            <p style={{ color: "#CDBECE" }}>OR SINGUP WITH</p>
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
export default Signup;
