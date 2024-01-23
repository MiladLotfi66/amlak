import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";

const authOption = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (err) {
          console.log(err);
          throw new Error("مشکلی در سرور رخ داده است");
        }
        if (!email || !password) {
          throw new Error("اطلاعات را به درستی وارد کنید");
        }
        const user = await User.findOne({ email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");
        return {email};

      },
    }),
  ],
};
const handler=nextAuth(authOption);
export { handler as GET, handler as POST };
