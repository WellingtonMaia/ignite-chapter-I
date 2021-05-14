interface RepositoryItemProps {
  repository: {
    id: number;
    name: string;
    description: string;
    html_url: string;
  },
}

export function RepositoryItem(props: RepositoryItemProps) {
  const repository = props.repository;
  return (
    <li>
      <strong>{repository.name ?? 'Default'}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank">
        Acessar repositórios
      </a>
    </li>
  );
}