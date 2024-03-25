import Header1 from './components/Header/Header1';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header2 from './components/Header/Header2';
import Hero from './components/Hero/Hero';
import IconSection from './components/Hero/IconSection'
import Main from './components/Main/Main';
import ScrollTopButton from './components/ScrollTopButton/ScrollTopButton';
function App() {
  function handleScroll (){
    
  }
  const [theme, colorMode] = useMode();
  return (
    <div onScroll={handleScroll}>
      <ColorModeContext.Provider 
// @ts-ignore
      value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
      <CssBaseline />
        <Header1 />
        <Header2 />
        <Hero />
        <IconSection />
        <Main />
        <ScrollTopButton/>
        </ThemeProvider>
      </ColorModeContext.Provider>
        
    </div>
  )
}

export default App
