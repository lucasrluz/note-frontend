import { LoginButton } from "./components/loginButton";
import { CreateDemoAccountButton } from "./components/createDemoAccountButton";
import { LineOr } from "./components/lineOr";
import { ForgetPasswordAndRegisterLink } from "./components/forgetPasswordAndRegisterLink";
import { EmailInput } from "./components/emailInput";
import { PasswordInput } from "./components/passwordInput";
import { LoginTitle } from "./components/loginTitle";

export default function LoginPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex w-96 flex-col items-center rounded-lg bg-white shadow-2xl">
        <LoginTitle />
        <EmailInput />
        <PasswordInput />
        <ForgetPasswordAndRegisterLink />
        <LoginButton />
        <LineOr />
        <CreateDemoAccountButton />
      </div>
    </main>
  );
}
