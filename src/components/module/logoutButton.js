"use client";
// import styles from "@/components/module/logoutButton.module.css";
import styles from "@/module/logoutButton.module.css"
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
function LogoutButton() {
  return (
    <div  className={styles.button} onClick={signOut}>
      <FiLogOut/>خروج
    </div>
  )
}

export default LogoutButton
