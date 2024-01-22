import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    console.log(email, password);
    if (!email || !email.includes("@") || !password || password < 6) {
      return new NextResponse("اطلاعات را به درستی وارد کنید", { status: 400 });
    }
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser) {
      return new NextResponse("این ایمیل قبلا ثبت شده است", { status: 400 });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    console.log(newUser);
    return NextResponse.json( "ثبت نام با موفقیت انجام شد" , newUser);

  } catch (err) {
    console.log(err);
    return new NextResponse("مشکلی در سرور رخ داده است", { status: 500 });
  }
}
