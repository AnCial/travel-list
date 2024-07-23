import { useState } from "react";

const initialItems = [
  { id: 1, name: "Toothbrush", quantity: 5, packed: false },
  { id: 2, name: "Underwear", quantity: 5, packed: false },
  { id: 3, name: "Phone Charger", quantity: 5, packed: false },
  { id: 4, name: "Socks", quantity: 5, packed: true },
  { id: 5, name: "Shirts", quantity: 5, packed: false },
  { id: 6, name: "Pants", quantity: 5, packed: false },
  { id: 7, name: "Sandwich", quantity: 5, packed: true },
  { id: 8, name: "Water", quantity: 5, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>👜 Pack Me! 🧳</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Don't forget to me Pack me! 😘</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>x items packed</em>
    </footer>
  );
}
