"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FilePlus, LogOut, Save, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function IndexPage() {
  const router = useRouter();
  const [notes, setNotes]: any[] = useState(null);
  const [noteOpen, setNoteOpen]: any[] = useState(null);
  const [update, setUpdate]: any[] = useState(true);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    if (jwt === null) {
      router.push("/login");

      return;
    }

    const response = async () => {
      const getNotesResponse = await getNotes();

      setNotes(getNotesResponse.data);
    };

    response();
  }, [update]);

  useEffect(() => {
    if (noteOpen == null) {
      return;
    }

    setNoteInEditor(noteOpen);
  }, [noteOpen]);

  function logout() {
    localStorage.removeItem("jwt");

    router.push("/login");
  }

  function openNote(noteId: string) {
    let note;

    notes.forEach((element: any) => {
      if (element.noteId === noteId) {
        note = element;
        return;
      }
    });

    setNoteOpen(note);
  }

  function newNote() {
    const textAreaTitle: HTMLTextAreaElement =
      document.querySelector("#title")!;

    const textAreaContent: HTMLTextAreaElement =
      document.querySelector("#content")!;

    textAreaTitle.value = "";
    textAreaContent.value = "";

    setNoteOpen(null);
  }

  async function saveNote(note: any) {
    const textAreaTitle: HTMLTextAreaElement =
      document.querySelector("#title")!;

    const textAreaContent: HTMLTextAreaElement =
      document.querySelector("#content")!;

    if (noteOpen === null) {
      const response = await axios.post(
        "https://note-api-w041.onrender.com/note",
        {
          title: textAreaTitle.value,
          content: textAreaContent.value,
          userId: "",
        },
        {
          headers: { JWT: localStorage.getItem("jwt") },
        },
      );

      setNoteOpen(response.data);

      return;
    }

    const response = await axios.put(
      "https://note-api-w041.onrender.com/note",
      {
        noteId: note.noteId,
        title: textAreaTitle.value,
        content: textAreaContent.value,
        userId: "",
      },
      {
        headers: { JWT: localStorage.getItem("jwt") },
      },
    );
  }

  return (
    <main className="flex h-screen flex-col">
      <div className="flex h-12 flex-row">
        <div className="flex w-80 flex-col items-center justify-center border-b border-r border-stone-300">
          <input
            className="w-60 rounded-md border border-solid border-gray-300 focus:outline-none"
            type="text"
            placeholder="Buscar nota"
          />
        </div>
        <div className="flex w-full flex-row items-center justify-end border-b border-stone-300">
          <button onClick={newNote} className="mr-5">
            <FilePlus color="gray" />
          </button>
          <button
            onClick={async () => {
              await saveNote(noteOpen);
              setUpdate(!update);
            }}
            className="mr-5"
          >
            <Save color="gray" />
          </button>
          <button className="mr-5">
            <Trash2 color="gray" />
          </button>
          <button onClick={logout} className="mr-5">
            <LogOut color="gray" />
          </button>
        </div>
      </div>
      <div className="flex h-full flex-row">
        <div className="w-80 border-r border-stone-300">
          {notes &&
            notes.map((element: any) => (
              <div
                key={element.noteId}
                className="flex h-12 flex-col items-center justify-center border-b border-stone-300"
              >
                <div className="w-60">
                  <button onClick={() => openNote(element.noteId)}>
                    {element.title}
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="flex w-full flex-col">
          <textarea
            className="ml-3 mt-1 h-10 bg-transparent text-3xl font-bold focus:outline-none"
            name=""
            id="title"
            placeholder="Título"
          ></textarea>
          <textarea
            className="ml-3 h-full bg-transparent focus:outline-none"
            name=""
            id="content"
            placeholder="Conteúdo..."
          ></textarea>
        </div>
      </div>
    </main>
  );
}

async function getNotes() {
  const response = await axios.get("https://note-api-w041.onrender.com/note", {
    headers: { JWT: localStorage.getItem("jwt") },
  });

  return response;
}

function setNoteInEditor(note: any) {
  const textAreaTitle: HTMLTextAreaElement = document.querySelector("#title")!;

  const textAreaContent: HTMLTextAreaElement =
    document.querySelector("#content")!;

  textAreaTitle.value = note.title;
  textAreaContent.value = note.content;
}
