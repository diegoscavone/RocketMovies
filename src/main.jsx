import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import GlobalStyle from './styles/global.js'
import theme from './styles/theme.js'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
)
