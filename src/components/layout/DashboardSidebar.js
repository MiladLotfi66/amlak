import styles from '@/layout/DashboardSidebar.module.css';
import { getServerSession } from 'next-auth';
import { authOption } from '@/app/api/auth/[...nextauth]/route';
import {CgProfile} from "react-icons/cg";
import Link from 'next/link';
import LogoutButton from '@/module/logoutButton';
async function DashboardSidebar({children}) {
  const session =await getServerSession(authOption);
  
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile/>
        <p>{session?.user.email}</p>
        <span></span>
        <Link href="/dashboard" >حساب کاربری</Link>
        <Link href="/dashboard/my-profiles" >آگهی های من</Link>
        <Link href="/dashboard/add" >ثبت آگهی</Link>
        <LogoutButton/>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default DashboardSidebar
