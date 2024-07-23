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
  return (
    <div className="add-form">
      <h3>Don't forget to me Pack me! 😘</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <h3>My Packing List</h3>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>x items packed</em>
    </footer>
  );
}
