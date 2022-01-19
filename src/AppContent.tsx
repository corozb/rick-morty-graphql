import { useState, useEffect } from 'react'
import { CharacterFragment, useGetCharactersLazyQuery } from './graphql'
import { Hero, Title, Subtitle, CharactersList, ButtonWrapper, Button } from './components'

const EMPTY_CHARACTERS: CharacterFragment[] = []
const INITIAL_PAGE = 1

function AppContent() {
  const [initialLoad, setInitialLoad] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [characters, setCharacters] = useState<CharacterFragment[]>(EMPTY_CHARACTERS)
  const [getCharacters, { loading }] = useGetCharactersLazyQuery({
    onCompleted: (data) => {
      setCharacters([...characters, ...(data.characters?.results! as CharacterFragment[])])
      setPage(page + 1)
    },
  })

  const handleLoadMoreClick = () => {
    getCharacters({ variables: { page } })
  }

  useEffect(() => {
    if (!initialLoad) {
      getCharacters({ variables: { page } })
    }
    setInitialLoad(true)
  }, [initialLoad, getCharacters, page])

  return (
    <>
      <Hero>
        <Title>Rick & Morty</Title>
        <Subtitle>Request con GraphQL</Subtitle>
      </Hero>
      <CharactersList characters={characters} />
      <ButtonWrapper>
        <Button onClick={handleLoadMoreClick} isLoading={loading}>
          Cargar más
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default AppContent
