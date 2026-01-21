import styles from "./NoteItem.module.css";

type Props = {
  title: string;
  description: string;
};

export default function NoteItem({ title, description }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
