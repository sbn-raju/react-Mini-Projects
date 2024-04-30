import Forms from "./pages/Forms"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forms/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
