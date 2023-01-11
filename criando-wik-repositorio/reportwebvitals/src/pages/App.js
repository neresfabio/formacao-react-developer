import { useState } from "react";
import logoGithub from "../assets/logo-github-2.png";
import Button from "../components/Button";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { api } from "../services/api";
import { Container } from "./styles";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);
  //Busca dados da API
  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        console.log("Item adicioando a lista.");
        return;
      }
      console.log("Repositório não encontrado.");
    }
  };
  //Remove objeto da lista
  const handleRemoveRepo = (id) => {
    //utilizar filter
    setRepos(repos.filter((repo) => repo.id !== id));
    console.log("Item removido!");
  };

  return (
    <Container>
      <img src={logoGithub} width={77} height={72} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
