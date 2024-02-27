import { Container, Content, Header, Form } from './styles'

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi' 

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import Button from '../../components/Button'

import { Link } from 'react-router-dom'

export function Profile(){
  return (
    <Container>
      <Header>
        <Link to='/'>
          <ButtonText
            title="Voltar"
            icon={FiArrowLeft}
          />
        </Link>
      </Header>
      <Content>
          <img src="https://github.com/diegoscavone.png" alt="Foto do Usuário" />

          <Form>       
            <Input
              placeholder="Diego Scavone"
              type="text"
              icon={FiUser}
            />

            <Input
              placeholder="diego.scavone@gmail.com"
              type="email"
              icon={FiMail}
            />

            <Input
              placeholder="Senha atual"
              type="password"
              icon={FiLock}
            />

            <Input
              placeholder="Nova Senha"
              type="password"
              icon={FiLock}
            />

            <Button
              title="Salvar"
            />
          </Form>
      </Content>
    </Container>
  )
}