import { useState } from 'react'
import { Hero, Title, Subtitle, CharactersList, ButtonWrapper, Button } from './components'

function AppContent() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMoreClick = () => {
    setIsLoading(true)
  }

  const characters = Array(20).fill(10)

  return (
    <>
      <Hero>
        <Title>Rick & Morty</Title>
        <Subtitle>Request con GraphQL</Subtitle>
      </Hero>
      <CharactersList characters={characters} />
      <ButtonWrapper>
        <Button onClick={handleLoadMoreClick} isLoading={isLoading}>
          Cargar más
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default AppContent
