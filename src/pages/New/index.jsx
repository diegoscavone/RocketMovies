import { Container, Content, Form } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from '../../components/Input'
import Button from '../../components/Button'
import { Textarea } from "../../components/TextArea"
import { MovieItem } from "../../components/MovieItem"

import { FiArrowLeft } from 'react-icons/fi'

import { Link } from 'react-router-dom'

export function New(){
  return (
      <Container>
          <Header></Header>
          <Content>
            <Link to="/">
            <ButtonText 
            title="Voltar"
            icon={FiArrowLeft}
            />
            </Link>

            <h1>Novo Filme</h1>

            <Form>  
              <div className="input-wrapper">      
                <Input
                  placeholder="Título"
                  type="text"
                />
                <Input
                  placeholder="Sua nota (de 0 a 5)"
                  type="text"
                />
              </div>
              <Textarea></Textarea>

              <h3>Marcadores</h3> 
                <div className="tags">
                  <MovieItem value="React"/>
                  <MovieItem isNew placeholder="Novo marcador"/>
                </div>  

              <div className="input-wrapper">
                <a href="#">Criar Conta</a>
                <Button title="Entrar"/>
              </div>
            </Form>
        </Content>

      </Container>
  )
}