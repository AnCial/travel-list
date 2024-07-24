export default function Stats({ items }) {
  if (!items.length)
    return <footer className="stats">Find something to pack! 😤</footer>;
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100 || 0);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You packed good! 😘"
          : `You have ${numItems} items to be packed with ${numPackedItems} items
        packed which is ${percentage}% 
        `}
      </em>
    </footer>
  );
}
