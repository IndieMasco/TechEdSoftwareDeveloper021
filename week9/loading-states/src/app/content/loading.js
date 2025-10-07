// This page will show while the actual page is loading
// We NEED to call it loading.js
import Image from "next/image";

export default function LoadingPage() {
  return (
    <>
      <Image src="/just-wait.gif" alt="fluff" width={500} height={500} />
    </>
  );
}
