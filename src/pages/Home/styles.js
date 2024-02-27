import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 12rem 19rem;
  overflow-y: auto;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 4.7rem;
  }

  h1 {
    font-weight: 400;
  }

  a {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    height: 48px;
    padding: 0 16px;

    display: flex;
    align-items: center;

    border: 0;
    border-radius: 10px;

    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  &:disabled {
    opacity: 0.5;
  }
`
