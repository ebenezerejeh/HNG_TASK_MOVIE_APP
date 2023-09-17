import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Error from "./Error"
import SinglePage from "./singlePage"




const App= ()=> {
    return <BrowserRouter>
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/movies/:id' element= {<SinglePage/>} />
      <Route path='*' element={<Error/>}/>

        </Routes>
    
    </BrowserRouter>
    
}

export default App
