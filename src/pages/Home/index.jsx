import { FiPlus } from "react-icons/fi";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Cards } from "../../components/Cards";

import { Link } from "react-router-dom";

export function Home(){
  return (
    <Container>
      <Header></Header>
      <Content>
        <div>
          <h1>Meus filmes</h1>
            <Link to="/new"><FiPlus/> Adicionar filme</Link>
        </div>

        <Cards data={{
          title: 'Interstellar',
          paragraph: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name: 'Ficção Cientifica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Família'}
          ]
        }}/>

        <Cards data={{
          title: 'Interstellar',
          paragraph: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name: 'Ficção Cientifica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Família'}
          ]
        }}/>

        <Cards data={{
          title: 'Interstellar',
          paragraph: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name: 'Ficção Cientifica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Família'}
          ]
        }}/>
        <Cards data={{
          title: 'Interstellar',
          paragraph: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
          tags: [
            {id: '1', name: 'Ficção Cientifica'},
            {id: '2', name: 'Drama'},
            {id: '3', name: 'Família'}
          ]
        }}/>

</Content>
    </Container>
  )
}