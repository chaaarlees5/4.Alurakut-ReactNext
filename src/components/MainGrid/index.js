import styled from "styled-components";

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;

  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profile welcome comunity";
    grid-template-columns: 160px 1fr 312px;
  /* medida do meio seria 618px, mas para a página se ajustar com o tamanho da tela 
  é utilizado o '1fr' que faz com que a coluna definida se ajuste a area que sobrar */ 
  }
`;

export default MainGrid;