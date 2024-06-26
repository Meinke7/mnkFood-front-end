import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 100px;
  z-index: 3;

  animation: falling 3s;

  border-radius: 10px;
  padding: 10px;

  text-align: center;

  line-height: 1.2;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_LINE};

  @keyframes falling {
    0% {
      transform: translateY(180px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 800px) {
    padding: 0;

    top: 45px;
    right: 0;
    left: 0;
  }
`;
