export default function IndexPage() {
  function test(title: string) {
    return (
      <div className="flex h-12 flex-col items-center justify-center border-b border-stone-300">
        <div className="w-60">
          <button>
            <h1 className="line-clamp-1">{title}</h1>
          </button>
        </div>
      </div>
    );
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
          {test("Título A B C D E F G H I J K L M N")}
          {test("Título B")}
          {test("Título C")}
        </div>
        <div className="flex w-4/5 flex-col">
          <textarea
            className="ml-3 mt-1 h-10 bg-transparent text-3xl font-bold focus:outline-none"
            name=""
            id=""
            placeholder="Título"
          ></textarea>
          <textarea
            className="ml-3 h-full bg-transparent focus:outline-none"
            name=""
            id=""
            placeholder="Conteúdo..."
          ></textarea>
        </div>
      </div>
    </main>
  );
}
