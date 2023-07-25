const loginFormHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    try {
      const response = await fetch("/api/users/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        console.log("Logged in!");
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error(error);
      alert("error logging in");
    }
  }
};
