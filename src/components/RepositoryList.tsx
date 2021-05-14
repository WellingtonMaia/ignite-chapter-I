import React, { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";
import './../styles/repositories.scss';
const URL_BASE = "https://api.github.com/orgs/rocketseat/repos";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {

  // const [repositories, setRepositories] = useState<Array<Repository>>([]) 
  //OR
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch(URL_BASE)
      .then(response => response.json())
      .then(data => setRepositories(data));
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories && repositories.map(repository => {
          return <RepositoryItem key={repository.id} repository={repository} />
        })}
      </ul>
    </section>
  );
}