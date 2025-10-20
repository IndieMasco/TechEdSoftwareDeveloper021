// There is an optimised <a> component call link
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>This is a header</header>
      <nav>
        <Link href={"/"}>Home </Link>
        <Link href={"/about"}>About </Link>
        <Link href={"/staff"}>Staff</Link>
        <Link href="/posts/1">Post 1</Link>
      </nav>
    </>
  );
}
