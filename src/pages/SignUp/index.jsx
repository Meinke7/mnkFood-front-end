import logoFoodExplorer from "../../assets/logoFoodExplorer.svg";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleTurnBack() {
    navigate(-1);
  }

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    if (password.length < 4) {
      return alert("A senha deve ser no mínimo de 4 caracteres");
    }

    setLoading(true);

    await api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Conta criada com sucesso!");
        handleTurnBack();
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível criar a conta.");
        }
      });
  }

  return (
    <Container>
      <div>
        <div className="wrapper_logo">
          <img id="logo" src={logoFoodExplorer} alt="logo Food Explorer" />
        </div>
        <p>
          Nosso servidor é gratuito, portanto seu cadastro pode levar alguns
          segundos.
        </p>
      </div>

      <Form>
        <h1>Crie sua conta</h1>
        <label>
          Nome
          <Input
            placeholder="Seu Nome"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email
          <Input
            placeholder="seu@email.com"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Senha
          <Input
            placeholder="No mínimo 4 carácteres"
            type="password"
            maxLength="10"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button
          loading={loading}
          title={loading ? "Carregando" : "Criar conta"}
          onClick={handleSignUp}
        />
        <div>
          <a onClick={handleTurnBack}>Já é cliente? Faça seu Login.</a>
        </div>
      </Form>
    </Container>
  );
}
