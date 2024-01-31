import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { Types } from "mongoose";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Profile from "@/models/Profile";

///////////////////////////////get function////////////


////////////////////////////////post function/////////////////////////
export async function POST(req) {
  try {
    await connectDB();
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
    } =body;
    ///////////get session and check user login//////////////
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "ابتدا وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }
    /////////////////get user and check user is exist////////////////
    const user = await User.findOne({ email: session.user.email });
    if(!user){
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 401 }
      )
    }
    console.log(`user id is ${user}`);
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
const newProfile= await Profile.create({
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
  // new Types.ObjectId(user._id),

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

export async function PATCH(req) {
  try {
    await connectDB();

    const {
      _id,
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = await req.json();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }

    if (
      !_id ||
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        {
          error: "دستری شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;
    profile.save();

    return NextResponse.json(
      {
        message: "آگهی با موفقیت ویرایش شد",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}