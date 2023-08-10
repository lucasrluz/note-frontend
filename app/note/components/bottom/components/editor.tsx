export function Editor() {
  return (
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
  );
}
