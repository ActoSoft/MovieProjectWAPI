import styled from 'styled-components';

export const MovieListContainer = styled.div`
  display: block;
`

export const MovieListTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const ListContainerTitle = styled.h1`
  margin: 25px;
`

export const GoToAddMovieButton = styled.button`
  background: none;
  border: 2px solid rgba(0, 132, 255, 0.658);
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.4s;
  margin: 0 25px;
  color: rgba(0, 132, 255, 0.658);
  &:hover {
    color: white;
    background-color: rgba(0, 132, 255, 0.658);
    border-color: white;
  }
`

export const MovieCardsContainer = styled.div`
  display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`

export const Paragraph = styled.p`
  color: red;
  font-size: 16px;
`

// export const Anchore = styled.a`

// `
