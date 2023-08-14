import axios from "axios";

export function TopElement() {
  function saveNote() {
    localStorage.removeItem("noteEditor");

    const titleEditorElement: HTMLTextAreaElement =
      document.querySelector("#title")!;

    const contentEditorElement: HTMLTextAreaElement =
      document.querySelector("#content")!;

    titleEditorElement.value = "";
    contentEditorElement.value = "";
  }

  function updateNote() {
    const titleEditorElement: HTMLTextAreaElement =
      document.querySelector("#title")!;

    const contentEditorElement: HTMLTextAreaElement =
      document.querySelector("#content")!;

    if (localStorage.getItem("noteEditor") === null) {
      axios.post(
        "https://note-api-w041.onrender.com/note",
        {
          title: titleEditorElement.value,
          content: contentEditorElement.value,
          userId: "",
        },
        { headers: { JWT: localStorage.getItem("jwt") } },
      );
      window.location.reload();
      return;
    }

    axios.put(
      "https://note-api-w041.onrender.com/note",
      {
        noteId: localStorage.getItem("noteEditor"),
        title: titleEditorElement.value,
        content: contentEditorElement.value,
        userId: "",
      },
      { headers: { JWT: localStorage.getItem("jwt") } },
    );

    window.location.reload();
  }

  return (
    <div className="flex h-12 flex-row">
      <div className="flex w-80 flex-col items-center justify-center border-b border-r border-stone-300">
        <input
          className="w-60 rounded-md border border-solid border-gray-300 focus:outline-none"
          type="text"
          placeholder="Buscar nota"
        />
      </div>
      <div className="flex w-full flex-row items-center justify-end border-b border-stone-300">
        <button
          onClick={saveNote}
          className="mr-3 h-8 w-24 rounded bg-sky-500 text-white hover:bg-sky-400"
        >
          Criar Nota
        </button>
        <button
          onClick={updateNote}
          className="mr-3 h-8 w-16 rounded bg-green-500 text-white hover:bg-green-400"
        >
          Salvar
        </button>
        <button className="mr-3 h-8 w-16 rounded bg-red-500 text-white hover:bg-red-400">
          Excluir
        </button>
      </div>
    </div>
  );
}
