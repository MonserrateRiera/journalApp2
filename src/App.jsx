
import { ThemeProvider } from '@emotion/react'
import { AppRouter } from './routes/AppRouter'
import { AppTheme } from './theme'

function App() {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  )
}

export default App
