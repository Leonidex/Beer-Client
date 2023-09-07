import styles from "./Intro.module.css";
import { useEffect, useState } from "react";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  }, []);

  return isVisible ? <div className={styles.intro} /> : null;
}
