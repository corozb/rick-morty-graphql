import { Card, ImageWrapper, Image } from './styles'

function CharacterCard() {
  return (
    <Card>
      <ImageWrapper>
        <Image src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='Morty Smith' />
      </ImageWrapper>
    </Card>
  )
}

export default CharacterCard
