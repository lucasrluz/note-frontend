import axios from "axios";

export async function login(router: any) {
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
