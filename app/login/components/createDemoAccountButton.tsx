export function CreateDemoAccountButton({ createDemoAccount }: any) {
  return (
    <button
      className="mb-5 mt-3 h-11 w-5/6 rounded-md bg-sky-600 text-white hover:bg-sky-700"
      onClick={createDemoAccount}
    >
      Criar conta demo
    </button>
  );
}
