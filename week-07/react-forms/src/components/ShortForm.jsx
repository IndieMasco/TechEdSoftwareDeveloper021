import { useState } from "react";

export default function Form() {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    job: "",
  });

  function handleInputChange(event) {
    setFromData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // This is where STEP 4 would go
    // Fetch POST server route
    // Add headers and body
    console.log(formData);
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
            value={formData.username}
            onChange={handleInputChange}
          />
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
        </fieldset>

        <fieldset>
          <legend>Professional Info</legend>
          <label htmlFor="">Job: </label>
          <input
            type="text"
            name="job"
            required
            value={formData.job}
            onChange={handleInputChange}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
