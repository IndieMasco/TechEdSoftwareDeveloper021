// TODO: Store the form data, track the changes of the inputs, submit the form data, and send it to the server

// STEP 1: Store the form data -> state
// STEP 2: Track the changes in the inputs --> events (listener:)
// STEP 3: Submit the form data --> event (listener: onSubmit, handler)
// STEP 4: Send the form data to the server --> fetch route and POST the form data (wont be doing today)

// htmlFor is the same as for

import { useState } from "react";

export default function Form() {
  // Form data storage
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");

  // Track the changes in the input value --> onChange
  function handleUsernameChange(event) {
    setUsername(event.target.value);
    console.log(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }

  function handleJoeChange(event) {
    setJob(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // This is where STEP 4 would go
    // Fetch POST server route
    // Add headers and body
    console.log(username, email, job);
  }

  return (
    <>
      <h1>From</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Info</legend>
          <label htmlFor="">Username: </label>
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </fieldset>

        <fieldset>
          <legend>Professional Info</legend>
          <label htmlFor="">Job: </label>
          <input
            type="text"
            name="job"
            required
            onChange={handleJoeChange}
            value={job}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
