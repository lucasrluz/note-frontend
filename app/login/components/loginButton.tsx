export function LoginButton({ login }: any) {
  return (
    <button
      className="my-3 h-11 w-5/6 rounded-md bg-sky-600 text-white hover:bg-sky-700"
      onClick={login}
    >
      Logar
    </button>
  );
}
