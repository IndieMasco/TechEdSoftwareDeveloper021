import SlowComponent from "@/components/SlowComponent";

// In this case we dont want the whole page to load at once, we want the text content to be rendered for the user while the slow content (images) are loading
// Implement a loading state just for the slow content, not the whole page
// We are going to use Suspense

import { Suspense } from "react";

export default function GalleryPage() {
  return (
    <>
      <h1>Gallery</h1>
      <p>FLUFF</p>
      <p>FLUFF</p>
      <p>FLUFF</p>
      <p>FLUFF</p>
      <p>FLUFF</p>
      <Suspense fallback={"Loading all the gallery images"}>
        {/* The slow component contains all the images in my gallery */}
        <SlowComponent />
      </Suspense>
      <p>something</p>
    </>
  );
}
