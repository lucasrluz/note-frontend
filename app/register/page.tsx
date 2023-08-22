"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { register } from "./util/register";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-96 flex-col items-center rounded-lg bg-white shadow-2xl">
        <div className="w-5/6">
          <h1 className="my-3 text-3xl font-bold">Registrar</h1>
        </div>
        <input
          id="name"
          className="my-3 h-11 w-5/6 rounded-md border border-solid border-gray-300 focus:outline-none"
          type="text"
          placeholder="Nome"
        />
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
          <Link className="text-sky-600" href="/login">
            Login
          </Link>
        </div>
        <button
          onClick={() => register(router)}
          className="my-3 h-11 w-5/6 rounded-md bg-sky-600 text-white hover:bg-sky-700"
        >
          Criar Conta
        </button>
      </div>
    </main>
  );
}
