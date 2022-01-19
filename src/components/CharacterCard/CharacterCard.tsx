import { Card, ImageWrapper, Image, Section, ContentWrapper, StatusIndicator } from './styles'
import { Typography } from '../Typography'
import { CharacterStatus } from '../../types'

type Props = {
  name: string
  image: string
  status: CharacterStatus
  species: string
  lastKnownLocation: string
  firstEpisode: string
}

function CharacterCard({ name, image, status, species, lastKnownLocation, firstEpisode }: Props) {
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
            {lastKnownLocation}
          </Typography>
        </Section>
        <Section>
          <Typography color='grey' size='small'>
            First seen in:
          </Typography>
          <Typography color='white' size='medium'>
            {firstEpisode}
          </Typography>
        </Section>
      </ContentWrapper>
    </Card>
  )
}

export default CharacterCard
