import { useState } from "react";
import styles from "./FetchNewNoteBtn.module.css";

export default function FetchNewNoteBtn({ setNotes }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    console.log("trying to fetch new note");

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/note1");
      const data = await res.json();
      setNotes((prev) => [...prev, data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button disabled={loading} className={styles.button} onClick={handleClick}>
      Get new note
    </button>
  );
}
