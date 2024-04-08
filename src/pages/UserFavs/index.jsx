import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';

import { useEffect, useState } from 'react';

import { Container } from './styles';

export function UserFavs() {
    const [favorites, setFavorites] = useState([]);

    const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

    useEffect(()=>{
        try{
            async function catchFavorites(){
                const response = await api.get(`/favorites/${user.id}`)
                setFavorites(response.data)
            }
            catchFavorites()
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possível completar.")
            }
        };
    });
    
    async function removeFavorite(id){
        await api.delete(`/favorites/${id}/${user.id}`);
    };

    return(
        <Container>
            <Header />
            
            <h1>Favoritos</h1>

            <section>
                <ul>
                    {favorites &&
                        favorites.map((item, index)=>{
                            return(
                                <li key={String(index)}>
                                    <img src={`${api.defaults.baseURL}/files/${item.image}`} alt="imagem do prato" />
                                    
                                    <div className="wrapper_title_button">
                                        <h2>{item.title}</h2>
                                        <button onClick={()=>removeFavorite(item.id)}></button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

            <Footer />
        </Container>
    )
}