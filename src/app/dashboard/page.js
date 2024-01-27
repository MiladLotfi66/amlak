import DashboardPage from "@/templates/dashboardPage";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function page() {
  await connectDB()
  const session = await getServerSession(authOption);
  const email = session.user.email;
  const user =await User.findOne({ email: email });
  const createdAt =user.createdAt
  return (
    <div>
      <DashboardPage createdAt={createdAt}/>
    </div>
  )
}

export default page
