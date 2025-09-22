import { useParams, Link } from "react-router";
import { Outlet } from "react-router";

export default function UserPage() {
  let { username } = useParams();
  return (
    <>
      <h2>User: {username}</h2>
      <Link to={`/users/${username}`}>User's profile</Link>{" "}
      <Link to={`/users/${username}/posts`}>User's posts</Link>
      <Link to={`/users/${username}/likes`}>User's likes</Link>
      <Outlet />
    </>
  );
}
