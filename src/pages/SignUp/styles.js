import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;

  animation: 0.75s screenScale;

  > div {
    width: 80%;
    p {
      font-size: 1rem;
      text-align: center;
      opacity: 0.6;
      margin-top: 4rem;
    }
  }

  .wrapper_logo {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 20px 100px;
    align-items: center;

    img {
      width: 320px;
    }
  }

  @media (max-width: 865px) {
    flex-direction: column;

    > div {
      p {
        text-align: start;
      }
    }

    .wrapper_logo {
      margin: 20px 0;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 32px;
  flex-direction: column;

  width: 840px;

  padding: 65px;
  margin: 200px 135px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  label {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 32px;
  }

  Button {
    min-height: 56px;
    margin: 24px 0 30px 0;
  }

  > div {
    text-align: center;
  }

  @media (max-width: 865px) {
    width: auto;
    margin: 20px;
    padding: 0;
    background: none;

    > h1 {
      display: none;
    }
  }
`;
