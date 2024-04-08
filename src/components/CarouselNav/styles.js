import styled from 'styled-components';


export const Container = styled.section`
  padding: 0 120px;
  

  #hidden {
    display: none;
  }

  .wrapper_plates {
    position: relative;
    

    .wrapper_button {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 0;
      height: 100%;
      width: 150px; /* Largura dos botões de navegação */
    }

    .back {
      background: linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.472541) 100%);
      left: 0;
    }

    .forward {
      background: linear-gradient(90deg, rgba(0, 10, 15, 0.472541) 0%, #000A0F 100%);
      right: 0;
    }

    .wrapper_button button {
      background: none;
      border: none;
      cursor: pointer;

      width: 40px;
      height: 40px;

      svg {
        font-size: 32px;
        color: ${({ theme }) => theme.COLORS.WHITE_900};
      }
    }
}

  

  @media (max-width: 832px) {
    #addMargin {
      margin-left: 0;
    }
  }

  @media (max-width: 1300px) {
    .back, .forward {
      width: 50px ; /* Largura dos botões de navegação em telas menores */
    }
  }
`;
