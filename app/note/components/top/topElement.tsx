export function TopElement() {
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
        <button className="mr-3 h-8 w-16 rounded bg-green-500 text-white hover:bg-green-400">
          Salvar
        </button>
        <button className="mr-3 h-8 w-16 rounded bg-red-500 text-white hover:bg-red-400">
          Excluir
        </button>
      </div>
    </div>
  );
}
