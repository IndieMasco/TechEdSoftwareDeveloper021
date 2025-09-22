import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import UserPage from "./components/UserPage";
import Likes from "./components/Likes";
import Posts from "./components/Posts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="posts" element={<Posts />} />
          <Route path="likes" element={<Likes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
