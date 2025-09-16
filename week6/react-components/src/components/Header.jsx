import NavBar from "./NavBar";
// Import your components
import "./Header.css";

export default function Header({ data }) {
  return (
    <>
      <header className="main-header">
        <h1>Frogs</h1>
        <NavBar data={data} />
      </header>
    </>
  );
}
