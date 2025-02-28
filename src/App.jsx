import { BrowserRouter, Route, Routes } from "react-router-dom";
//LAYOUT
import DefaultLayout from "./layout/DefaultLayout";
//PAGES
import HomePage from "./pages/Homepage";
import SingleMovie from "./pages/SingleMovie";
export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
        <Route element={<DefaultLayout/>}>
        <Route index path="/" element={<HomePage/>} />
        <Route path="/movies/:id" element={<SingleMovie/>} />
        </Route>
    </Routes>
</BrowserRouter>
</>
  )
}