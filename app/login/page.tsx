"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LoginButton } from "./components/loginButton";
import { CreateDemoAccountButton } from "./components/createDemoAccountButton";
import { LineOr } from "./components/lineOr";
import { ForgetPasswordAndRegisterLink } from "./components/forgetPasswordAndRegisterLink";
import { EmailInput } from "./components/emailInput";
import { PasswordInput } from "./components/passwordInput";
import { LoginTitle } from "./components/loginTitle";

export default function LoginPage() {
  const router = useRouter();

  async function createDemoAccount() {
    try {
      const response = await axios.post(
        "https://note-api-w041.onrender.com/user/demo",
        {},
      );

      alert(
        "Esta é uma Conta Demo, portando ela será excluída em 24h. Não armazene nenhum valor que você queira guardar por uma longo tempo. Caso este seja o seu objeto considere criar uma conta.",
      );

      const emailInput: HTMLInputElement = document.querySelector("#email")!;
      const passwordInput: HTMLInputElement =
        document.querySelector("#password")!;

      emailInput.value = response.data.email;
      passwordInput.value = response.data.password;
    } catch (error) {
      alert(error);
    }
  }

  async function login() {
    try {
      const emailInput: HTMLInputElement = document.querySelector("#email")!;
      const passwordInput: HTMLInputElement =
        document.querySelector("#password")!;

      const response = await axios.post(
        "https://note-api-w041.onrender.com/auth/login",
        {
          email: emailInput.value,
          password: passwordInput.value,
        },
      );

      localStorage.setItem("jwt", response.data.jwt);

      router.push("/note");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-96 flex-col items-center rounded-lg bg-white shadow-2xl">
        <LoginTitle />
        <EmailInput />
        <PasswordInput />
        <ForgetPasswordAndRegisterLink />
        <LoginButton login={login} />
        <LineOr />
        <CreateDemoAccountButton createDemoAccount={createDemoAccount} />
      </div>
    </main>
  );
}
