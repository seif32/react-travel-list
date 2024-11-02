export default function Item({ itemObj, onDeleteItem, onUpdateItem }) {
  const { id, quantity, description, packed } = itemObj;

  return (
    <li>
      <input
        onChange={() => onUpdateItem(id)}
        checked={packed}
        type="checkbox"
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} - {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
