import { Outlet } from "react-router-dom"
import './Root.css'
import Footer from "../../components/Shared/Footer"
import Navbar from "../../components/Shared/Navbar"

const Root = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Root