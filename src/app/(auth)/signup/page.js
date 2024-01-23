import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import SignupPage from "@/templates/SignupPage";
async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  return (
    <div>
      <SignupPage />
    </div>
  );
}

export default SignUp;
