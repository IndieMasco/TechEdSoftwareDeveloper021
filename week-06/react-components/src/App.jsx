// App component
// Component names are capitalised

// Basic struture
//Imports
import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export default function app() {
  const data = "home";
  // JS logic

  return (
    // HTML elements or nested components
    // Fragment --> it's an empty HTML tag that we use for nesting purposes
    <>
      {/* We nest components as self-closing elements */}
      <Header data={data} />
      <h1>Welcome!</h1>
      <main>
        {/* We add props in the samw ay as we did attribu */}
        <MainSection
          source="https://images.unsplash.com/photo-1551189014-fe516aed0e9e?q=80&w=886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="frog1"
          content="content1"
          link="https://unsplash.com/"
        />
        <MainSection
          source="https://images.unsplash.com/photo-1518737496070-5bab26f59b3f?q=80&w=924&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="frog2"
          content="content2"
          link="https://unsplash.com/"
        />
        <MainSection
          source="https://images.unsplash.com/photo-1642250602588-3167b4e0c6e1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="frog3"
          content="content3"
          link="https://unsplash.com/"
        />
      </main>
      <Footer />
    </>
  );
}
