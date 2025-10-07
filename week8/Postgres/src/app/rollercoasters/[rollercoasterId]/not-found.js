// MUST be called not-notFound.js
// Set up a not-found page

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>PAGE NOT FOUND</h1>
      <h2>We cannot find this page</h2>
      <Link href={"/rollercoasters"}>CLICK HERE TO GO BACK!!!</Link>
    </>
  );
}
