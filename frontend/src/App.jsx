import {HeroUIProvider, Navbar} from "@heroui/react";
import Nav from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  return (
    <HeroUIProvider>
      <Home/>
    </HeroUIProvider>
  )
}

export default App
