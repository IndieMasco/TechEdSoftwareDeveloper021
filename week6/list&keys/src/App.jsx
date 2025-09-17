import "./App.css";
import Image from "./components/Image";
import { images } from "./lib/imageData";

export default function App() {
  //JS logic
  console.log(images);
  return (
    <>
      <h1 className="heading">Images</h1>
      {/* We can use a loop to avoid repetitive code */}
      {/* We cannot use a classic for loop here --> methods */}
      {/* The map method RETURNS a new array based on the original array we called it upon */}
      {images.map((item) => {
        return (
          <Image
            // The key prop gives a unique value to each component instance for React to know which instance to render specifically (lifecycle)
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            author={item.author}
          />
        );
      })}
    </>
  );
}
