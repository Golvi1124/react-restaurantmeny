export default function DishCard({ data: { tittel, pris, ingredienser, kategori } }) {
  return (
    <div>
        <h3>{tittel}</h3>
        <p>Kategori: {kategori}</p>
        <p>Ingredienser: {ingredienser}</p>
        <p>Pris: {pris}</p>
    </div>
  );
}