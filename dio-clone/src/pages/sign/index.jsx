import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdAccountCircle } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

import {
  Column,
  Container,
  TemContaText,
  SpanLink,
  Row,
  SubtitleLogin,
  Title,
  TitleSign,
  Wrapper,
} from "./styles";

const schema = yup.object({
  name: yup.string().required("Campo obrigatório."),
  email: yup
    .string()
    .email("E-mail não é válido.")
    .required("Campo obrigatório."),
  password: yup
    .string()
    .min(3, "No mínimo 3 caracteres.")
    .required("Campo obrigatório."),
});

const Sign = () => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/login");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post(`users`, {
        name: formData.name,
        email: formData.email,
        senha: formData.password,
      });
      console.log("response ", data);
      if (data.success) {
        navigate("/login");
        alert("Cadastrado com sucesso!");
      } else {
        alert("Houve um erro, tente novamente.");
      }
    } catch {
      alert("Houve um erro, tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleSign>Comece agora grátis</TitleSign>
            <SubtitleLogin>Crie sua conta e make the change._ </SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="Nome completo"
                leftIcon={<MdAccountCircle />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <SubtitleLogin>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubtitleLogin>
            </Row>
            <Row>
              <TemContaText>
                Já tenho conta. <SpanLink onClick={handleClickSignIn}>Fazer Login</SpanLink>
              </TemContaText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};


export { Sign };