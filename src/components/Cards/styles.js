import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow-y: auto;
`
export const Content = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 3.2rem;
  border-radius: 1.6rem;

  > div {
    margin: 0.8rem 0 1.5rem 0;
  }

  > div svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  > div svg:nth-child(5) {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-style: normal;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: justify;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`
