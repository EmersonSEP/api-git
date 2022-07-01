import { useEffect, useState } from "react";
import { RepositoryItem } from "../RepositoryItem";

import "../../styles/global.css";
import { listRepository } from "../services/repository";


interface IRepository {
  name: string;
  description: string;
  html_url: string;
  favorite: boolean;
  id: number;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  function handleFavorite (id: number,) {
    const newRepositories = repositories.map((repo) => {
      return repo.id === id ? {...repo, favorite: true } : repo
    })
      setRepositories(newRepositories)
  }

  // useEffect(() => {
  //   const getData =async () => {
  //     try {
  //       const response = await listRepository();
  //       setRepositories(response.data);
  //     } catch (error) {
  //       alert("algo deu errado!")
  //     }
  //   }
  //   getData();
  // })

  useEffect(() => {
    fetch ('https://api.github.com/users/EmersonSEP/repos')
    .then((response) => response.json())
    .then((data) => setRepositories(data))
    alert ('Seja bem-vindo!');
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios - Emerson</h1>
      <ul>
          {repositories.map((repository) =>{
            return <RepositoryItem 
            key={repository.name}
            repository={repository}
            handleFavorite={(id) => handleFavorite(id)}
            />
          })}
      </ul>
    </section>
  );
}