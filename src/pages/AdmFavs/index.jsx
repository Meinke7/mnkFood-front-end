import { AdmHeader } from '../../components/AdmHeader';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';

import {AiFillHeart} from 'react-icons/ai';

import { useEffect, useState } from 'react';

import { Container } from './styles';

export function AdmFavs() {
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        try{
            async function catchFavorites(){
                const response = await api.get(`/plates`);
                setFavorites(response.data);
            }
            catchFavorites();
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert('MAS GENTE???.');
            }
        };
    });

    return(
        <Container>
            <AdmHeader />
            
            <h1>Todos os pratos</h1>

            <section>
                <ul>
                    {favorites &&
                        favorites.map((item, index)=>{
                            return(
                                <li key={String(index)}>
                                    <div className="wrapper_title_like">
                                        <img src={`${api.defaults.baseURL}/files/${item.image}`} alt="imagem do prato" />

                                        <h2>{item.title}</h2>
                                        <div>
                                            <span>{item.favorited}</span>
                                            <AiFillHeart />
                                        </div>
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