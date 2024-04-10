import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  cursor: grab;
  max-width: 304px;
  height: 462px;

  .loader {
    position: absolute;
    left: 50%;
    top: 15vh;

    z-index: 3;
  }

  .wrapper_favorite {
    position: absolute;
    right: 15px;
    top: 15px;

    z-index: 2;
    background: none;
    border: none;

    #buttonFavorite {
      position: absolute;
      right: -10px;
      top: 3px;

      opacity: 0;
    }

    svg {
      font-size: 35px;
      color: ${({ theme }) => theme.COLORS.RED_900};
    }

    #fillHeart {
      animation: 0s screenScaleHeart;
    }

    @media (max-width: 800px) {
      svg {
        font-size: 30px;
      }
    }
  }

  a {
    position: relative;

    display: flex;
    flex-direction: column;

    align-items: center;
    text-align: center;

    max-width: 304px;
    height: 530px;

    background: rgba(0, 0, 0, 0.65);

    .wrapper_img {
      border-radius: 50%;
      margin-top: 24px;
      overflow: hidden;

      img {
        width: 176px;
        height: 176px;
      }
    }

    .wrapper_title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 15px;

      overflow: hidden;
      height: 34px;

      color: ${({ theme }) => theme.COLORS.WHITE_900};

      svg {
        font-size: 35px;
      }
    }

    .wrapper_description {
      margin-top: 20px;
      font-family: "Roboto", serif;
      text-align: center;
      justify-content: center;
      font-weight: 400;
      font-size: 12px;

      overflow: hidden;
      padding: 0 25px;
      width: 100x;
      height: 50px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }

    .wrapper_price {
      margin-bottom: 180px;

      span {
        height: 52px;
        width: 100%;

        font-weight: 400;
        font-size: 32px;
        color: ${({ theme }) => theme.COLORS.PRICE_$};
      }
    }
  }

  .wrapper_buttons {
    position: absolute;
    bottom: 46px;
    right: 45px;
    left: 45px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;

    z-index: 2;

    span {
      font-size: 20px;
      margin-bottom: 5px;
    }

    #buttonLess,
    #buttonMore {
      background: none;
      border: none;

      svg {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.WHITE_500};
      }
    }

    .wrapper_control {
      display: flex;
      justify-content: center;
      gap: 25px;

      width: 80%;
    }
  }

  // MOBILE

  .wrapper_plate_mobile {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   


    a {
      gap: 10px;
      
      width: 100%;
      height: 100%;
     
      
      
      .wrapper_img {
        margin: 10px;

        img {
          width: 90px;
          height: 90px;
        }
      }

      .wrapper_title {
        display: flex;

        margin-right: 10px;
        line-height: 1;
        height: 22px;

        svg, h1 {
          font-size: 15px;
        }
      }

      .wrapper_description {
        display: none;
      }

      .wrapper_price span {
        font-size: 16px;
      }
    }
  }

  #wrapper_buttons_mobile {
    flex-direction: column;

    width: 100%;
    left: 0;

    span {
      font-size: 20px;
    }

    #buttonLess,
    #buttonMore {
      background: none;
      border: none;

      svg {
        font-size: 15px;
      }
    }

    #buttonLess {
      margin-right: 15px;
    }

    #buttonMore {
      margin-left: 15px;
    }

    > Button {
      height: 30px;
      width: 90%;

      padding: 0;
      

      border: none;
    }
  }
`;
