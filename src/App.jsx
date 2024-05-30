import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from './Pages/LandingPage'
import { SingleItemPage } from './Pages/SingleItemPage'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route index element={<LandingPage />} />
         <Route path="SingleItemPage" element={<SingleItemPage />} />
         {/* <Route path="SingleItemPage" element={<SingleItemPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
