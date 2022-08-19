const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormLoginIn);

function onFormLoginIn(event) {
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  event.preventDefault();
  if (email === "" || password === "") {
    alert("error");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    event.target.reset();
  }
}

