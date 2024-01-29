import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";





////////////////////////////////post function/////////////////////////
export async function POST(req) {
  try {
    connectDB();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = body;
    ///////////get session and check user login//////////////
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "ابتدا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }
    /////////////////get user and check user is exist////////////////
    const user= User.findOne({email:session.user.email})
    if(!user){
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 401 }
      )
    }
/////////////////////check data correct or not///////////////////
if(!title||
  !description||
  !location||
  !phone||
  !price||
  !realState||
  !constructionDate||
  !category||
  !rules||
  !amenities){
  return NextResponse.json(
    { error: "لطفا اطلاعات را به درستی وارد کنید" },
    { status: 422 }
  )
}
///////////////////////////create new profile/////////////////////////
const newProfile=Profile.create({
  title,
  description,
  location,
  phone,
  price:+price,
  realState,
  constructionDate,
  category,
  rules,
  amenities,
  userId:new Types.ObjectId(user._id)
})
return NextResponse.json(
  { message: "آگهی جدید با موفقیت ثبت شد" },
  { status: 200 }
)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "مشکلی aدر سرور رخ داده است" },
      { status: 500 }
      );
  }
}
