import "./DishCard.css";

export default function DishCard({ data: { tittel, pris, ingredienser, kategori } }) {
  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    padding: "10px",
  };
  return (
    <div className="container">
        <h3 style={titleStyle}>{tittel}</h3>
        <p>Kategori: {kategori}</p>
        <p>Ingredienser: {ingredienser}</p>
        <p>Pris: {pris}</p>
    </div>
  );
}