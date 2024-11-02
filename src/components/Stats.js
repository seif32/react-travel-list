export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start Preparing your bag! 🚀</em>
      </footer>
    );

  const totalItems = items.length;
  const numpackedItems = items.filter((item) => item.packed).length;
  const percPacked = Math.round((numpackedItems / totalItems) * 100);

  return (
    <footer className="stats">
      {percPacked !== 100 ? (
        <em>
          💼 You have {totalItems} items on your list, and you already packed{" "}
          {numpackedItems} ({percPacked}%)
        </em>
      ) : (
        <em>You have everything ready to GOO!🛩</em>
      )}
    </footer>
  );
}
