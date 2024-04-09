import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function FavoritePlates() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      async function catchFavorites() {
        const response = await api.get(`/plates`);
        setFavorites(response.data);
      }
      catchFavorites();
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível carregar.");
      }
    }
  });

  return (
    <Container>
      <div className="wrapper_title">
        <h1>Top Favoritos</h1>
        <AiFillFire />
      </div>

      <section>
        <ul>
          {favorites &&
            favorites.map((item, index) => {
              return (
                <li key={String(index)}>
                  {item.favorited === 0 ? (
                    <></>
                  ) : (
                    <div className="wrapper_title_like">
                      <div className="wrap">
                        <img
                          src={`${api.defaults.baseURL}/files/${item.image}`}
                          alt="imagem do prato"
                        />
                        <div>
                          <span>{item.favorited}</span>
                          <AiFillFire />
                        </div>
                      </div>

                      <h2>{item.title}</h2>
                    </div>
                  )}
                </li>
              );
            })}
        </ul>
      </section>
    </Container>
  );
}
