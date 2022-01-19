import { CharacterFragment } from '../../graphql'
import { CharacterStatus } from '../../types'
import { CharacterCard } from '../CharacterCard'
import { ListWrapper, List } from './styles'

type Props = {
  characters: CharacterFragment[]
}

function CharactersList({ characters }: Props) {
  return (
    <ListWrapper>
      <List>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name!}
            image={character.image!}
            status={character.status as CharacterStatus}
            species={character.species!}
            lastKnownLocation={character.location!.name!}
            firstEpisode={character.episode![0]!.name!}
          />
        ))}
      </List>
    </ListWrapper>
  )
}

export default CharactersList
