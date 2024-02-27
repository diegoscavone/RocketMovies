import { Container, Profile, Brand } from "./styles";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

export function Header(){
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile>
      <div>
        <strong>Diego Scavone</strong>
        <span>sair</span>
      </div>

        <Link to="/profile">
          <img src="https://github.com/diegoscavone.png" alt="Foto do Usuário" />
        </Link>

      </Profile>
    </Container>
  )
}