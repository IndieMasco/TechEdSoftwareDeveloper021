// App component
// Component names are capitalised

// Basic struture
//Imports
import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export default function app() {
  // JS logic

  return (
    // HTML elements or nested components
    // Fragment --> it's an empty HTML tag that we use for nesting purposes
    <>
      {/* We nest components as self-closing elements  */}
      <Header />
      <h1>Welcome!</h1>
      <MainSection />
      <MainSection />
      <MainSection />
      <Footer />
    </>
  );
}
