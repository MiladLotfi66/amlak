import styles from "@/module/TextList.module.css";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileData, setProfileData, type }) {
    const removeHandler=(index)=>{
        const list = [...profileData[type]];
        list.splice(index, 1);
        setProfileData({ ...profileData, [type]: list });
        
    }
    const changeHandler=(e,index)=>{
        const {value}=e.target;
      const list = [...profileData[type]];
      list[index] = value;
      setProfileData({ ...profileData, [type]: list });

    }
  const addHandler = () => {
    setProfileData({
      ...profileData,
      [type]: [...profileData[type], ""],
    });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>

      {profileData[type].map((item, index) => {
        return (
          <div className={styles.card} key={index}>
            <input type="text" value={item} onChange={(e)=>changeHandler(e,index)} />
            <button onClick={(e)=>removeHandler(index)}>حذف <AiOutlineDelete/></button>
          </div>
        );
      })}
      <button onClick={addHandler}>
        {" "}
        <MdOutlineLibraryAdd />
        افزودن
      </button>
    </div>
  );
}

export default TextList;
