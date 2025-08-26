console.log("hello!");

// Forms
// TODO: Add an event to our form submission

// - Event listner

const form = document.getElementById("user-form");
form.addeventlistner("submit", handleSubmit);

// - Event handler
function handleSubmit(event) {
  // - (event) is just a placeholder it can be anything
  // Prevent the default behaviour of the submit event --> TO add our input data to the URL
  event.preventDefault();
  // - Create an element to store out data --> object template
  // form {
  //     full-name: blankSpace,
  //     email: blankSpace,
  //     password: blankSpace
  // }
  const formDataTemplate = new formData(form);
  //   console.log(formDataTemplate);
  // - Add the user input values to our object template
  const formValues = Object.fromEntries(formDataTemplate);
  // console.log(formValues); if we console.log this is what we should see
  // form {
  //     full-name: "Sam"
  //     email: "sam@gmail.com"
  //     password: "fdgjdsfhdbdfd"
  // }
  // The next step would be to send the form values to the server to be processed (Week 4 topic)
}

// TODO: Handle the form data
