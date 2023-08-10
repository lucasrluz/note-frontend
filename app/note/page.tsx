"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function IndexPage() {
  async function getNotes() {
    const response = await axios.get(
      "https://note-api-w041.onrender.com/note",
      {
        headers: { JWT: localStorage.getItem("jwt") },
      },
    );

    return response;
  }

  const [notes, setNotes]: any[] = React.useState([]);

  useEffect(() => {
    const notesData = async () => {
      const notes = await getNotes();

      setNotes(notes);
    };

    notesData().catch((error) => alert(error));
  }, []);

  function foo(e: any, element: any) {
    const titleElement: HTMLInputElement = document.querySelector("#title")!;
    const contentElement: HTMLInputElement =
      document.querySelector("#content")!;

    titleElement.value = element.title;
    contentElement.value = element.content;
  }

  return (
    <main className="flex h-screen flex-col">
      <div className="flex h-12 flex-row">
        <div className="flex w-1/5 flex-col items-center justify-center border-b border-r border-stone-300">
          <input
            className="w-60 rounded-md border border-solid border-gray-300 focus:outline-none"
            type="text"
            placeholder="Buscar nota"
          />
        </div>
        <div className="flex w-4/5 flex-row items-center justify-end border-b border-stone-300">
          <button className="mr-3 h-8 w-16 rounded bg-green-500 text-white hover:bg-green-400">
            Salvar
          </button>
          <button className="mr-3 h-8 w-16 rounded bg-red-500 text-white hover:bg-red-400">
            Excluir
          </button>
        </div>
      </div>
      <div className="flex h-full flex-row">
        <div className="w-1/5 border-r border-stone-300">
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
        <div className="flex w-4/5 flex-col">
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
