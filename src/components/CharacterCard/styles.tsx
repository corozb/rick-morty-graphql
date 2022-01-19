import styled from 'styled-components'

export const Card = styled.div`
  width: 600px;
  height: 220px;
  display: flex;
  overflow: 'hidden';
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin: 13.5px;
  color: white;
`

export const ImageWrapper = styled.div`
  display: flex;
  flex: 2 1 0%;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex: 3 1 0%;
  flex-direction: column;
  padding: 13.5px;
  background-color: #3c3e43;
`

export const Section = styled.section`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  justify-content: center;
`
