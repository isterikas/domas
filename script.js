const firstnameElement = document.querySelector("#firstname");
const surnameElement = document.querySelector("#lastname");
const submitButton = document.querySelector("#form-submit-btn");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const echo = document.querySelector("#echo");
  echo.textContent = `Jūs įrašėte ${firstnameElement.value}, ${surnameElement.value}`;
});
