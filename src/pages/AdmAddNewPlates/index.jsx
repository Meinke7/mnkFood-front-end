import {  RiArrowDropLeftLine } from 'react-icons/ri';
import {  MdOutlineFileUpload } from 'react-icons/md';

import {  Ingredients  } from '../../components/Ingredients';
import {  AdmHeader } from '../../components/AdmHeader';
import { Footer } from '../../components/Footer';
import {  api } from '../../services/api';

import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import {Container, Form} from './styles'

export function AdmAddNewPlates() {
    const [image, setImage] = useState(null);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    
    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState([]);
    
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    function handleAddIngredient() {
        if(!newIngredients){
            return
        }else{
            setIngredients(prevState => [...prevState, newIngredients]);
            setNewIngredients("");
        };
    };
    
    function handleRemoveIngredient(ingredientDeleted) {
        setIngredients(prevState => prevState.filter(ingredients => ingredients !== ingredientDeleted));
    };
    
    const handleImage = (event) => {
        const file = event.target.files[0];
       
        setImage(file);
    };

    async function createPlate(e){
        if(!image || !title || !category || !ingredients || !description){
            e.preventDefault();
            alert("Campo vazio")
        }else{

            console.log('Dados do prato:', {
                title,
                category,
                description,
                ingredients,
                price,
                image
            });

            const fileUpload = new FormData();
        
            fileUpload.append("imgPlate", image);
    
            fileUpload.append("data",JSON.stringify({
                title,
                category,
                description,
                ingredients,
                price,
            }));
        
            alert("Prato add ao cardápio.");
            handleBackHome();

            try {
            const response = await api.post("plates", fileUpload);
            
        } catch (error) {
            console.error('Erro ao enviar prato:', error); // Registre qualquer erro que ocorra durante a solicitação
        }
              
        }          
    };

    function handleBackHome(){
        return navigate("/");
    };

    return(
        <Container>
            <AdmHeader />

            <Form>
                <div className='wrapper_title_and_button'>
                    <button onClick={handleBackHome}>
                        <RiArrowDropLeftLine />
                        <span>voltar</span>
                    </button>
                    <h1>Adicionar prato</h1>
                </div>

                <div className='wrapper_inputs'>
                    <div className='wrapper_plate'>
                        <div>
                            <label>
                                Imagem do prato
                                <div>
                                    <MdOutlineFileUpload />
                                    Selecione imagem
                                    <input 
                                    type='file' 
                                    onChange={handleImage}
                                    />
                                </div>
                            </label>

                            <div className='wrapper_name_category'>
                                <label>
                                    Nome
                                    <input 
                                    maxLength={25}
                                    placeholder='Ex: Salada Ceasar'
                                    type='text'
                                    onChange={(e)=>setTitle(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Categoria
                                    <select onChange={(e)=>setCategory(e.target.value)} id="select">
                                        <option value="">Selecionar</option>
                                        <option value="Refeições">Pratos</option>
                                        <option value="Sobremesas">Sobremesas</option>
                                        <option value="Bebidas">Bebidas</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className='wrapper_ingredients_price'>
                            <div>
                                <label htmlFor='ingredients'>
                                    Ingredientes
                                </label>

                                <div className='ingredients'>
                                    <Ingredients 
                                    isNew 
                                    placeholder="ingrediente" 
                                    onChange={e =>setNewIngredients(e.target.value)}
                                    value={newIngredients}
                                    onClick={handleAddIngredient}
                                    />
                                    
                                    {
                                        ingredients.map((ingredients, index)=>(
                                            <Ingredients 
                                            key={String(index)}
                                            value={ingredients}
                                            onClick={()=> handleRemoveIngredient(ingredients)}
                                            />
                                        ))
                                    }
                                </div>
                            </div>

                            <label>
                                Preço
                                <input
                                placeholder='R$'
                                type='number'
                                onChange={(e)=>setPrice(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>

                    <label>
                        Descrição
                        <textarea
                        maxLength={150}
                        placeholder='Descreva o prato, é seu momento de vender pro cliente'
                        type='text'
                        onChange={(e)=>setDescription(e.target.value)}
                        />
                    </label>
                </div>

                <div className='button'>
                    <button onClick={createPlate}>Adicionar novo prato</button>
                </div>
            </Form>

            <div className='wrapper_footer'>
                <Footer />
            </div>
        </Container>
    )
}