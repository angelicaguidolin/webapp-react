import { Outlet } from "react-router-dom"
//PAGES
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function DefaultLayout(){
    return(
        <>
        <Header />
            <Outlet/>
        <Footer />
            </>
    )
}