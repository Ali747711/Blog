import {HeroUIProvider} from "@heroui/react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import CreatePost from "./pages/CreatePost";
import Navbar from './components/Navbar'
import PostDetails from "./pages/PostDetails";
import PostUpdate from "./pages/PostUpdate";

function App() {

  return (
    <HeroUIProvider>
      <Navbar/>
      <div className="font-poppins px-6 md:px-16 lg:px-60 xl:px-100 bg-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreatePost/>}/>
          <Route path="/posts/:id" element={<PostDetails/>}/>
          <Route path="/posts/:id/edit" element={<PostUpdate/>}/>

        </Routes>
      </div>
      
      
    </HeroUIProvider>
  )
}

export default App
