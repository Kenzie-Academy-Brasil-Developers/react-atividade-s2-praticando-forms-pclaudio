import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AgreementCheckbox, AgreementContainer, AgreementLabel, Button, Container, ErrorMessage, FormSection, InputDDD, InputPassword, InputPhone, InputUserData, PhoneContainer } from "./style";



const LoginForm = ({ setUser }) => {
  const formSchema = yup.object().shape({
    username: yup.string().required('Nome de usuário é obrigatório').max(18, 'Nome de usuário não pode ter mais de 18 caracteres'),
    password: yup.string().required('Senha é obrigatório').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'A senha não é forte o suficiente'),
    passwordConfirmation: yup.string().required('Confirmação de senha é obrigatória').oneOf([yup.ref('password'), null], 'As senhas devem ser iguais'),
    fullname: yup.string().required('Nome completo é obrigatório'),
    cpf: yup.string().required('CPF é obrigatório').matches(/^[0-9]{11}$/, 'Não é um CPF válido'),
    email: yup.string().required('E-mail é obrigatório').email('Não é um e-mail válido'),
    emailConfirmation: yup.string().required('Confirmação de email é obrigatória').oneOf([yup.ref('email'), null], 'Os e-mails devem ser iguais'),
    ddd: yup.string().required('DDD é obrigatório').matches(/^[0-9]{2}$/, 'Não é um DDD válido'),
    phone: yup.string().required('Telefone é obrigatório').matches(/^([0-9]{8}|[0-9]{9})$/, 'Não é um telefone válido'),
    agreement: yup.boolean().oneOf([true], 'Os termos de uso devem ser aceitos'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitUserData = (data) => setUser(data);

  return (
    <FormSection>
      <form onSubmit={ handleSubmit(submitUserData) }>
        <InputUserData placeholder='Nome de usuário*' { ...register('username') } />
        <ErrorMessage>{ errors.username?.message }</ErrorMessage>

        <Container>
          <InputPassword placeholder='Senha*' { ...register('password') } />
          <ErrorMessage>{ errors.password?.message }</ErrorMessage>

          <InputPassword placeholder='Confirme sua senha*' { ...register('passwordConfirmation') } />
          <ErrorMessage>{ errors.passwordConfirmation?.message }</ErrorMessage>
        </Container>

        <InputUserData placeholder='Nome completo*' { ...register('fullname') } />
        <ErrorMessage>{ errors.fullname?.message }</ErrorMessage>

        <InputUserData placeholder='CPF*' { ...register('cpf') } />
        <ErrorMessage>{ errors.cpf?.message }</ErrorMessage>

        <InputUserData placeholder='Endereço de Email*' { ...register('email') } />
        <ErrorMessage>{ errors.email?.message }</ErrorMessage>

        <InputUserData placeholder='Confirme seu Email*' { ...register('emailConfirmation') } />
        <ErrorMessage>{ errors.emailConfirmation?.message }</ErrorMessage>

        <PhoneContainer>
          <InputDDD placeholder='DDD*' { ...register('ddd') } />
          
          <InputPhone placeholder='Telefone*' { ...register('phone') } />
        </PhoneContainer>
        <ErrorMessage>{ errors.ddd?.message }</ErrorMessage>
        <ErrorMessage>{ errors.phone?.message }</ErrorMessage>

        <AgreementContainer>
          <AgreementCheckbox type='checkbox' { ...register('agreement') } ></AgreementCheckbox>

          <AgreementLabel htmlFor='agreement'>Eu aceito os termos de uso.</AgreementLabel>
        </AgreementContainer>
        <ErrorMessage>{ errors.agreement?.message }</ErrorMessage>

        <Button type='submit'>CADASTRAR</Button>
      </form>
    </FormSection>
  );
};

export default LoginForm;