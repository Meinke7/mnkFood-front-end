import logoFooterFoodExplorer from "../../assets/logoFooterFoodExplorer.svg";
import { Container } from "./styles";

export function Footer() {
  return (
    <Container>
      <img src={logoFooterFoodExplorer} alt="logo food Explorer" />
      <span> &copy;Meinke - 2024 </span>
    </Container>
  );
}
