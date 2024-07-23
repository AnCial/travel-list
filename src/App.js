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
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { quantity, item } = form.elements;
    const newItem = {
      id: initialItems.length + 1,
      name: item.value,
      quantity: quantity.value,
      packed: false,
    };
    initialItems.push(newItem);
    form.reset();
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Don't forget to me Pack me! 😘</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
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
