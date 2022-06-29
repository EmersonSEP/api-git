import { Button } from "../Button/styles";
import { Item } from "./styles";

interface IRepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    favorite: boolean;
    id: number;
  };
  handleFavorite: (id: number) =>void;
}

export function RepositoryItem(props: IRepositoryItemProps ) {
  return(
    <Item>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar Repositorio</a>
      {props.repository.favorite && <span> Favorito </span>}<br />
      <Button onClick={() => props.handleFavorite(props.repository.id)}>Favoritar</Button>
    </Item>
  )
}