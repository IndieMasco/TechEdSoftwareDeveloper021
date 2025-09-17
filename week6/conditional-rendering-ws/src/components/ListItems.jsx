export default function ListItems() {
  const items = [];

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.length > 0 ? (
          items.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No items</li>
        )}
      </ul>
    </div>
  );
}
