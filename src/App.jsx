import { Route, Routes } from "react-router-dom"
import MainContainer from "./components/MainContainer"
import InputPage from "./components/InputPage"
import UpdateInputs from "./components/UpdateInputs"

function App() {

  return (
    <>
    <Routes>
      <Route path="*" element={<MainContainer />}/>
      <Route path="/" element={<MainContainer />}/>
      <Route path="/inputPage" element={<InputPage />}/>
      <Route path="/updatePage" element={<UpdateInputs />}/>
    </Routes>
    </>
  )
}

export default App
