import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/rollercoasters"}>Rollercoasters</Link>
        <Link href={"/new-rollercoaster"}>New Rollercoaster</Link>
      </nav>
    </header>
  );
}
