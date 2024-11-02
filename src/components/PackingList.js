import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  setItems,
  onDeleteItem,
  onUpdateItem,
}) {
  const [sort, setSort] = useState("input");

  function handleClearList() {
    setItems([]);
  }

  let sortedItems;

  if (sort === "input") sortedItems = items;
  else if (sort === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else sortedItems = items.slice().sort((a, b) => Number(a.packed - b.packed));

  function handleSort(e) {
    setSort(e.target.value);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select onChange={handleSort} value={sort}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by Packing Status</option>
        </select>

        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
