"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Input from "postcss/lib/input";

export default function LoginPage() {
  const router = useRouter();

  function createDemoAccount() {
    // axios.post("https://note-api-w041.onrender.com/demo")
    // .then((response) => {
    // localStorage.setItem("foo", "bar")
    // router.push('/user/demo')
    // })
    // .catch((error) => {
    //     alert(error)
    // })
    alert(
      "Esta é uma Conta Demo, portando ela será excluída em 24h. Não armazene nenhum valor que você queira guardar por uma longo tempo. Caso este seja o seu objeto considere criar uma conta.",
    );

    const emailInput: HTMLInputElement = document.querySelector("#email")!;
    const passwordInput: HTMLInputElement =
      document.querySelector("#password")!;

    emailInput.value = "foo";
    passwordInput.value = "123";
  }

  function logar() {}

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-1/3 flex-col items-center rounded-lg bg-white shadow-2xl">
        <div className="w-5/6">
          <h1 className="my-3 text-3xl font-bold">Login</h1>
        </div>
        <input
          id="email"
          className="h-11 w-5/6 rounded-md border border-solid border-gray-300 focus:outline-none"
          type="text"
          placeholder="E-mail"
        />
        <input
          id="password"
          className="my-3 h-11 w-5/6 rounded-md border border-solid border-gray-300 focus:outline-none"
          type="text"
          placeholder="Senha"
        />
        <div className="flex w-5/6 justify-between">
          <a className="text-sky-600" href="">
            Esqueceu sua senha?
          </a>
          <a className="text-sky-600" href="">
            Registrar-se
          </a>
        </div>
        <button
          className="my-3 h-11 w-5/6 rounded-md bg-sky-600 text-white hover:bg-sky-700"
          onClick={() => router.push("/note")}
        >
          Logar
        </button>
        <div className="flex w-5/6 flex-row">
          <div className="h-3 w-full border-b border-solid border-gray-400"></div>
          <p className="ml-1 mr-1">ou</p>
          <div className="h-3 w-full border-b border-solid border-gray-400"></div>
        </div>
        <button
          className="mb-5 mt-3 h-11 w-5/6 rounded-md bg-sky-600 text-white hover:bg-sky-700"
          onClick={createDemoAccount}
        >
          Criar conta demo
        </button>
      </div>
    </main>
  );
}
