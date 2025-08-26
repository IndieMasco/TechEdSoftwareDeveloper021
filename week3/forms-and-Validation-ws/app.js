const form = document.getElementById("user-form");
form.addEventlistner("submit", handleSubmit);
// - Event handler
function handleSubmit(event) {
  // - (event) is just a placeholder it can be anything
  event.preventDefault();
  // - Create an element to store out data --> object template
  const formDataTemplate = new FormData(form);
  console.log(formDataTemplate);

  // - Add the user input values to our object template
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);
}
