import styles from '@/module/CustomDatePicker.module.css';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
function CustomDatePicker({profileData , setProfileData}) {
    const changeHandler = (e) => {
        const data=new Date(e);
        setProfileData({ ...profileData, constructionDate: data});
    }
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت</p>
      <DatePicker   calendar={persian}
      locale={persian_fa}
      value={profileData.constructionDate}
      onChange={changeHandler}
      />

    </div>
  )
}

export default CustomDatePicker
