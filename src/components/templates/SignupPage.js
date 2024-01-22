"use client";
import styles from "@/templates/SignupPage.module.css";
import Link from "next/link";
import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <div className={styles.form}>
      <form>
        <h4>فرم ثبت نام</h4>
        <lable>ایمیل:</lable>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <lable>رمز عبور:</lable>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <lable>تکرار رمز عبور:</lable>
        <input
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        ></input>
        <button type="submit">ثبت نام</button>
      </form>
      <p>حساب کاربری دارید ؟
        <Link href='/signin'>ورود</Link>
      </p>
    </div>
  );
}

export default SignupPage;
