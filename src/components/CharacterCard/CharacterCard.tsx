import { Typography } from '../Typography'
import { Card, ImageWrapper, Image, Section, ContentWrapper } from './styles'

function CharacterCard() {
  return (
    <Card>
      <ImageWrapper>
        <Image src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='Morty Smith' />
      </ImageWrapper>
      <ContentWrapper>
        <Section>
          <Typography variant='heading' color='white' size='large'>
            Morty Smith
          </Typography>
          <Typography color='white' size='small'>
            Alive - Human
          </Typography>
        </Section>
        <Section>
          <Typography color='grey' size='small'>
            Last known location:
          </Typography>
          <Typography color='white' size='medium'>
            Earth (C-137)
          </Typography>
        </Section>
        <Section>
          <Typography color='grey' size='small'>
            First seen in:
          </Typography>
          <Typography color='white' size='medium'>
            The Rickshank Rickdemption
          </Typography>
        </Section>
      </ContentWrapper>
    </Card>
  )
}

export default CharacterCard
