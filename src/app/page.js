import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <Main/>
       
    </div>
  );
}
