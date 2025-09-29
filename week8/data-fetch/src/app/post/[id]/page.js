export default async function PostPage({ params }) {
  const slug = await params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${slug.id}` // include the params.id value from the URL
  );
  const post = await response.json(); // parse the response as JSON

  return (
    <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
