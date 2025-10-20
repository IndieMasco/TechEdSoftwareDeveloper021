//this is a static route --> /reviews

import { reviews } from "../lib/reviews";

//TODO: sorting filter for the reviews

// Search params is another word for query strings
import { useSearchParams } from "react-router";

export default function Reviews() {
  // Destructure a variable to store the value of our query string
  const [queryString] = useSearchParams();
  // We are going to put together the key and the value of the query string
  const sort = queryString.get("sort");

  // Logic to sort our data
  if (sort === "asc") {
    reviews.sort();
  } else if (sort === "desc") {
    reviews.sort().reverse();
  } else if (sort === "low") {
    //sort by lower price
  }

  return (
    <>
      <h1>Reviews </h1>
      {/* reviews data */}

      {reviews.map((review) => {
        return <h2>{review}</h2>;
      })}
    </>
  );
}
