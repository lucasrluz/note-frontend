import axios from "axios";

export async function register(router: any) {
  try {
    const nameInput: HTMLInputElement = document.querySelector("#name")!;
    const emailInput: HTMLInputElement = document.querySelector("#email")!;
    const passwordInput: HTMLInputElement =
      document.querySelector("#password")!;

    const response = await axios.post(
      "https://note-api-w041.onrender.com/user",
      {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      },
    );

    router.push("/login");
  } catch (error) {
    alert(error);
  }
}
