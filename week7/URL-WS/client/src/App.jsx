import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import UserPage from "./components/UserPage";
import Likes from "./components/Likes";
import Posts from "./components/Posts";
import Games from "./components/Games";

export default function App() {
  return (
    <>
      <h1>HELLO!</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/users/:username" element={<UserPage />}>
            <Route path="posts" element={<Posts />} />
            <Route path="likes" element={<Likes />} />
          </Route>
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
