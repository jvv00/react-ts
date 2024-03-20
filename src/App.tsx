import { ThemeProvider } from '@emotion/react'
import theme from './theme/theme'
import Routers from './Routers'
import { globalStyles } from './theme/globalStyles'
import React from 'react'

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        {globalStyles}
        <Routers />
    </ThemeProvider>
)

export default App
