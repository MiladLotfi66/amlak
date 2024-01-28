'use client';
import { useState } from "react";
import styles from "@/templates/addProfilePage.module.css";
import TextInput from "@/module/textInput";
import RadioList from "@/module/RadioList";
function AddProfilePage() {
    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
      });
      function submitHandler() {
        console.log(profileData);
      }
  return (
    <div className={styles.container} >
     <h3>ثبت آگهی</h3>
     <TextInput title="عنوان" name="title" profileData={profileData} setProfileData={setProfileData}/>
     <TextInput title="توضیحات" name="description" profileData={profileData} setProfileData={setProfileData} textarea={true}/>
     <TextInput title="آدرس" name="location" profileData={profileData} setProfileData={setProfileData}/>
     <TextInput title="شماره تماس" name="phone" profileData={profileData} setProfileData={setProfileData}/>
     <TextInput title="قیمت" name="price" profileData={profileData} setProfileData={setProfileData}/>
     <TextInput title="بنگاه" name="realState" profileData={profileData} setProfileData={setProfileData}/>
    <RadioList profileData={profileData} setProfileData={setProfileData}/>
     <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>
    </div>
  )
}

export default AddProfilePage
