import DishCard from "./DishCard";
export default function Menu({ retter }) {
  return (
    <>
      {retter.map(product => (
        <DishCard key={product.id} data={product} />
      ))}
    </>
  );
}