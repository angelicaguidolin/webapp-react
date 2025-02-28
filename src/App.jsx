import { BrowserRouter, Route, Routes } from "react-router-dom";
//PAGES
import HomePage from "./pages/Homepage";
import SingleMovie from "./pages/SingleMovie";
export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
        <Route index path="/" element={<HomePage/>} />
        <Route path="/movies/:id" element={<SingleMovie/>} />
    </Routes>
</BrowserRouter>
</>
  )
}