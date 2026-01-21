import { useState } from "react";
import FetchNewNoteBtn from "../FetchNewNoteBtn/FetchNewNoteBtn";
import NoteItem from "../NoteItem/NoteItem";
import styles from "./Board.module.css";

type NoteType = {
  title: string;
  description: string;
};

export default function Board() {
  const [notes, setNotes] = useState<NoteType[]>(noteData);

  return (
    <div className={styles.container}>
      {notes.map((note, index) => (
        <NoteItem
          key={index}
          title={note.title}
          description={note.description}
        />
      ))}
      <FetchNewNoteBtn setNotes={setNotes} />
    </div>
  );
}

const noteData = [
  {
    title: "Hello World!",
    description: "This is a test note to see how it looks",
  },
  {
    title: "Another Note",
    description:
      "This is another note to see how it looks. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus, illum tenetur accusantium ut minima distinctio odio incidunt consectetur ipsam. Cupiditate consequuntur voluptas dolorem quaerat soluta ab minima accusamus, reiciendis nesciunt corporis veniam, beatae dignissimos aspernatur alias error, perspiciatis laborum iste maiores quas? Quaerat nesciunt minus, distinctio iste ad consequuntur!",
  },
  {
    title: "Third Note  rrbabrbefeief",
    description: "This is the third note, just to add more content",
  },
];
