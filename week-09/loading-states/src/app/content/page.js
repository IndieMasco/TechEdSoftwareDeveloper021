import SlowComponent from "@/components/SlowComponent";

export default function ContentPage() {
  return (
    <>
      <h1>Content Page</h1>
      <p>Super long content</p>
      <p>it will take forever to laod</p>
      <SlowComponent />
    </>
  );
}
