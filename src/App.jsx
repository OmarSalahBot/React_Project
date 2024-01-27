import Header1 from './components/Header/Header1';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header2 from './components/Header/Header2';
function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider 
// @ts-ignore
      value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <CssBaseline />
        <Header1 />
        <Header2 />
        </ThemeProvider>
      </ColorModeContext.Provider>
        
    </>
  )
}

export default App
