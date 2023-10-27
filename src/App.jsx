import { HeroesContextProvider } from "./contexts/HeroesContext";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/global";

const App = () => {
  return (
    <HeroesContextProvider>
      <Home />
      <GlobalStyles />
    </HeroesContextProvider>
  );
};

export default App;
