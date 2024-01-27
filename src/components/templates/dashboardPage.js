import styles from "@/templates/dashboardPage.module.css";
function dashboardPage({createdAt}) {
 
  return (
    <div className={styles.container}>
      <h3>سلام ✋</h3>
      <p>آگهی خود را ثبت کنید تا هزاران نفر آن را بازدید نمایند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت</p>
        <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
}

export default dashboardPage;
