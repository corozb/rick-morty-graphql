import { Card, ImageWrapper, Image, Section, ContentWrapper, StatusIndicator } from './styles'
import { Typography } from '../Typography'
import { CharacterStatus } from '../../types'

function CharacterCard({ character }: any) {
  const { image, name, status, species, location } = character
  return (
    <Card>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <ContentWrapper>
        <Section>
          <Typography variant='heading' color='white' size='large'>
            {name}
          </Typography>
          <Typography color='white' size='small'>
            <StatusIndicator status={status} />
            {status} - {species}
          </Typography>
        </Section>
        <Section>
          <Typography color='grey' size='small'>
            Last known location:
          </Typography>
          <Typography color='white' size='medium'>
            {location.name}
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
