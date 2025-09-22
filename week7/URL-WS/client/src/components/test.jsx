import { useSearchParams } from "react-router";
import { games } from "../lib/games";

export default function Test() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event) => {
    setSearchParams({ sort: event.target.value });
  };

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
      <form>
        <label>
          Sort by:
          <select
            value={searchParams.get("sort") || ""}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </form>
      {games.map((games) => {
        return <p>{games}</p>;
      })}
    </>
  );
}
