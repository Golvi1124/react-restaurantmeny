import styles from "./DishCard.module.css";
// and use it like: <div className={styles.container}>

import { Button } from "./StyledComponents/Button.styled.jsx";

export default function DishCard({ data: { tittel, pris, ingredienser, kategori } }) {
  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    padding: "10px",
  };
  return (
    <div className={styles.container}>
        <h3 style={titleStyle}>{tittel}</h3>
        <p>Kategori: {kategori}</p>
        <p>Ingredienser: {ingredienser}</p>
        <p>Pris: {pris}</p>
        <Button primary={false}>Les mer</Button>        
        <Button primary={true}>Legg i handlekurv</Button>
    </div>
  );
}