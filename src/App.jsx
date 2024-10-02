import { Route, Routes } from "react-router"
import Profile from "./pages/Profile"
import Detail from "./pages/Detail"



function App() {
  return (
   <Routes>
    <Route path="/" element={<Profile />} />
    <Route path="/Profile" element={<Profile/>} />
    <Route path="/Profile/:id" element={<Detail />} />

   </Routes>
  )
}

export default App
