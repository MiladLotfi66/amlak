import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
// import { useSession } from "next-auth/react"
////
import SigninPage from '@/templates/SigninPage'
import { redirect } from "next/navigation";

async function Signin() {
  const session  =await getServerSession(authOptions);
if(session) redirect("/")
  return (
    <div>
      <SigninPage/>
    </div>
  )
}

export default Signin

