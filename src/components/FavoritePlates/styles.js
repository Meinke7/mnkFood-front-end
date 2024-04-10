import styled from "styled-components";

export const Container = styled.div`
  grid-area: Favorite;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: end;

  overflow-x: hidden;
  overflow-y: hidden;

  height: 170px;

  margin-bottom: 150px;
  padding: 10px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  .wrapper_title {
    position: absolute;
    top: 10px;

    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
      font-size: 20px;
    }
    svg {
      color: ${({ theme }) => theme.COLORS.RED_900};
      animation: 5s screenScaleHeart infinite;
    }
  }

  section {
    ul {
      animation: autoScroll 5s ease-in-out infinite;

      display: flex;
      gap: 25px;

      align-items: center;
      list-style: none;

      li {
        .wrapper_title_like {
          display: flex;
          gap: 5px;
          

          img {
            height: 70px;
            width: 70px;
            border-radius: 50%;
          }

          h2 {
            font-weight: 500;
            font-size: 13px;
          }
          .wrap {
            width: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;

            svg {
              margin-left: 5px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    margin-bottom: 80px;
  }

  @keyframes autoScroll {
    0% {
      transform: translateX(0px);
    }
    25% {
      transform: translateX(-25px);
    }
    50% {
      transform: translateX(-35px);
    }
    100% {
      transform: translateX(-45px);
    }
  }
`;
