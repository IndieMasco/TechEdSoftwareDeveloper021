import "./App.css";

function App() {
  const welcomeMessage = "Welcome to react";
  return (
    <>
      <div>
        <h1>{welcomeMessage}</h1>
      </div>
      <div>
        <h2>Another title</h2>
      </div>
    </>
  );
}

// When we are writting components, we will only export ONE element --> component function
export default App;
