import logoSectionSabores from "../../assets/sectionImg.svg";

import { Container } from "./styles";

export function Description() {
  return (
    <Container>
      <div className="wrapper_img">
        <img src={logoSectionSabores} alt="logo frutas" />
      </div>

      <div className="wrapper_description_banner">
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </div>
    </Container>
  );
}
