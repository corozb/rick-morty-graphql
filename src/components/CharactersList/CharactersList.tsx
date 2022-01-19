import { CharacterCard } from '../CharacterCard'
import { ListWrapper, List } from './styles'

type Props = {
  characters: any[]
}

function CharactersList({ characters }: Props) {
  return (
    <ListWrapper>
      <List>
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </List>
    </ListWrapper>
  )
}

export default CharactersList
