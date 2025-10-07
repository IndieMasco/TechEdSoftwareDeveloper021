// Error pages are client components
// This is an error page for the whole app
"use client";
import Link from "next/link";

export default function ErrorPage({ error }) {
  return (
    <>
      <h1>This rollercoster is broken</h1>
      <p>⚠️ HAZARD ⚠️</p>
      <p>{error.message}</p>
      <Link href={"/"}>GO HOME!!!</Link>
    </>
  );
}
