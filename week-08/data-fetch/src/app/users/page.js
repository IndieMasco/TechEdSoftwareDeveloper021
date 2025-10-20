// TODO: I want to render a list of users
// TODO: Sort the list of users in alphabetical order

// route --> "/users"
// route + query string (searchParams) --> "/users?sort=asc" or "users/?sort=desc"
import Link from "next/link";

// We can destructure searchParams in our route
export default async function UsersPage({ searchParams }) {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  const wrangleData = data.users;

  // searchParams is not typically 'await'ed in a server component in Next.js 13/14,
  // as it's passed as a plain object. We'll simplify this to direct access.
  const query = searchParams;

  // Logic to sort data in alphabetical order
  // If statement --> when query is "asc", change the order to alphabetical // when query is "desc", change the order to reverse alphabetical

  if (query.sort === "asc") {
    wrangleData.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  } else if (query.sort === "desc") {
    wrangleData.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
  }

  return (
    <>
      <h1>A list of users: </h1>
      <Link href={"/users?sort=asc"}>Sort alphabetical</Link>
      <Link href={"/users?sort=desc"}>Sort reverse alphabetical</Link>

      {wrangleData.map((user) => {
        return (
          <h1 key={user.id}>
            {user.firstName} {user.lastName}
          </h1>
        );
      })}
    </>
  );
}
