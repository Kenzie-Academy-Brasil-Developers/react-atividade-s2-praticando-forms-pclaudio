import { Button, Data, DataSection, Title } from "./style";

const UserData = ({ user: { username, password, fullname, cpf, email, ddd, phone }, setUser }) => {

  return(
    <DataSection>
      <Title>
        Usuário: <Data>{ username }</Data>
      </Title>

      <Title>
        Senha: <Data>{ password }</Data>
      </Title>

      <Title>
        Nome completo: <Data>{ fullname }</Data>
      </Title>

      <Title>
        CPF: <Data>{ cpf }</Data>
      </Title>

      <Title>
        E-mail: <Data>{ email }</Data>
      </Title>

      <Title>
        Telefone: <Data>{ `${ ddd } - ${ phone }` }</Data>
      </Title>

      <Button onClick={ () => setUser({}) }>CADASTRAR NOVO USUÁRIO</Button>
    </DataSection>
  );
};

export default UserData;