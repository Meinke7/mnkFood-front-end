import logoFoodExplorer from '../../assets/logoFoodExplorer.svg'


import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../hooks/auth';
import {useState} from "react";

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import {Container, Form} from './styles';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const {signIn, loading} = useAuth();

    function handleSignIn() {
        signIn({email, password});
    };

    function handleToSignUp() {
        navigate("/SignUp");
    };

    return(
        <Container>
            <div className='wrapper_logo'>
                <img id='logo' src={logoFoodExplorer} alt="Food Explorer" />
            </div>

            <Form>
          
                <h1>Faça seu login</h1>

                <label>
                    Email
                    <Input 
                        placeholder="exemplo@exemplo.com"
                        type="email"
                        onChange={e=>setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Senha
                    <Input 
                        placeholder="No mínimo 4 caracteres"
                        type="password"
                        minLength="4"
                        maxLength="10"
                        onChange={e=>setPassword(e.target.value)}
                    />
                </label>
                <Button 
                loading={loading}
                title={loading ? 'Loading...' : 'Entrar'} 
                onClick={handleSignIn}
                />

                <div>
                    <a onClick={handleToSignUp}>
                        Criar uma conta
                    </a>
                </div>
            </Form>
        </Container>
    )
}