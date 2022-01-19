import { useState, useEffect, useCallback } from 'react'
import { Hero, Title, Subtitle, CharactersList, ButtonWrapper, Button } from './components'
import api from './api'

const EMPTY_CHARACTERS: object[] = []

function AppContent() {
  const [initialLoad, setInitialLoad] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState<object[]>(EMPTY_CHARACTERS)

  const handleLoadMoreClick = () => {
    loadCharacters()
  }

  const loadCharacters = useCallback(async () => {
    setIsLoading(true)
    const moreCharacters = await api.fetchMoreCharactersMock()
    setCharacters([...characters, ...moreCharacters])
    setIsLoading(false)
  }, [characters])

  useEffect(() => {
    if (!initialLoad) {
      loadCharacters()
    }
    setInitialLoad(true)
  }, [initialLoad, loadCharacters])

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
