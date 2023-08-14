import axios from "axios";
import { useEffect, useState } from "react";

export function NoteTitle() {
  async function getNotes() {
    const response = await axios.get(
      "https://note-api-w041.onrender.com/note",
      {
        headers: { JWT: localStorage.getItem("jwt") },
      },
    );

    return response;
  }

  const [notes, setNotes]: any[] = useState([]);

  useEffect(() => {
    const notesData = async () => {
      const notes = await getNotes();

      setNotes(notes);
    };

    notesData().catch((error) => console.log(error));
  }, []);

  function foo(e: any, element: any) {
    const titleElement: HTMLInputElement = document.querySelector("#title")!;
    const contentElement: HTMLInputElement =
      document.querySelector("#content")!;

    console.log(element);

    localStorage.setItem("noteEditor", element.noteId);

    titleElement.value = element.title;
    contentElement.value = element.content;
  }

  return (
    <div className="w-80 border-r border-stone-300">
      {notes.data &&
        notes.data.map((element: any) => (
          <div className="flex h-12 flex-col items-center justify-center border-b border-stone-300">
            <div className="w-60">
              <button
                onClick={(e) => {
                  foo(e, element);
                }}
              >
                <h1 className="line-clamp-1">{element.title}</h1>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
