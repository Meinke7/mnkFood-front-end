import { CarouselNav } from '../../components/CarouselNav';
import { FavoritePlates } from '../../components/FavoritePlates';
import { Description } from '../../components/Description';
import { AdmHeader } from '../../components/AdmHeader';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Plates } from '../../components/Plates';


import {useState} from "react";

import {Container} from './styles';

export function Home() {
  const [plate, setPlate] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

  

  let favoritesId = [];
  let newListPlates = [];
  
  favorite.map(item=>{
    favoritesId.push(item.id)
  });
  
  for(let item of plate){
    if(favoritesId.includes(item.id) === false){
      newListPlates.push(item);
    }
  };
  
  let newListPlatesWithFavorites = newListPlates.concat(favorite);
  
  const mainDishes = [];

  const desserts = [];

  const drinks = [];

  newListPlatesWithFavorites.map(item=>{
    switch(item.category){
      case 'Refeições' :
        mainDishes.push(item)

        mainDishes.sort((a, b)=>{
          if(a.id < b.id){
            return -1
          }else{
            return true
          }
        })
        break;
        
      case 'Sobremesas' :
        desserts.push(item)

        desserts.sort((a, b)=>{
          if(a.id < b.id){
            return -1
          }else{
            return true
          }
        })
        break;

      case 'Bebidas' :
        drinks.push(item)

        drinks.sort((a, b)=>{
          if(a.id < b.id){
            return -1
          }else{
            return true
          }
        })
        break;

      default :
      alert('Error')
    }
  })

  return(
    <Container>

      {
        user.admin == 1 ?
        <AdmHeader 
        setPlate={setPlate} 
        plate={plate}/>
        :
        <Header 
        setPlate={setPlate} 
        setFavorite={setFavorite} 
        favorite={favorite}
        />
      }

      <Description />

      <main>

        <h2>Nossos Pratos</h2>
        <CarouselNav>
          {
            mainDishes && mainDishes.map((item, index)=>(
              <div key={String(index)}>
                <Plates
                date={item}
                />
              </div> 
            )) 
          }
        </CarouselNav>

        <h2>Sobremesas</h2>
        <CarouselNav>
          {
            desserts && desserts.map((item, index)=>(
              <div key={String(index)}>
                <Plates
                date={item}
                />
              </div> 
            )) 
          }
        </CarouselNav>


        <h2>Bebidas</h2>
        <CarouselNav>
          {
            drinks && drinks.map((item, index)=>(
              <div key={String(index)}>
                <Plates
                date={item}
                />
              </div> 
            )) 
          }
        </CarouselNav>

      </main>

      <FavoritePlates />

      <Footer />
    </Container>
  )
}