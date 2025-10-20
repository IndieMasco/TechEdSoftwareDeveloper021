import { useSearchParams } from "react-router";
import { games } from "../lib/games";
import SortGameOrder from "./SortGameOrder";

export default function GameCollection() {
  const [queryString] = useSearchParams();

  const sort = queryString.get("sort");

  if (sort === "asc") {
    games.sort();
  } else if (sort === "desc") {
    games.sort().reverse();
  } else if (sort === "low") {
    //
  }
  return (
    <>
      <SortGameOrder />
      {games.map((games) => {
        return <p>{games}</p>;
      })}
    </>
  );
}
