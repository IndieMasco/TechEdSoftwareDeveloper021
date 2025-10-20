import pg from "pg";

export default async function PostPage({ params }) {
  const postId = params.postId;

  const connectionString = process.env.NEXT_PUBLIC_DATABASE_URL;
  const db = new pg.Pool({ connectionString });

  const post = (await db.query("SELECT * FROM posts WHERE id = $1", [postId]))
    .rows;

  return (
    <div>
      {post.map((p) => (
        <div key={p.id}>
          <h2>{p.title}</h2>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}
