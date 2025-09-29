// There is an optimised <a> component call link
import link from "next/link";

export default function Header() {
  return (
    <>
      <header>This is a header</header>
      <nav>
        <link href={"/"}>Home</link>
        <link href={"/about"}>About</link>
        <link href={"/staff"}>Staff</link>
      </nav>
    </>
  );
}
