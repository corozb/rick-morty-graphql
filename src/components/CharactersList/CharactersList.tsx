import { CharacterCard } from '../CharacterCard'
import { ListWrapper, List } from './styles'

type Props = {
  characters: any[]
}

function CharactersList({ characters }: Props) {
  return (
    <ListWrapper>
      <List>
        {characters.map((_, index) => (
          <CharacterCard key={index} />
        ))}
      </List>
    </ListWrapper>
  )
}

export default CharactersList
