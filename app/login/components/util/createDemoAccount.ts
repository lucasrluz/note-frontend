import axios from "axios";

export async function createDemoAccount() {
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
