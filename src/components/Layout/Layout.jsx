import { Modal } from "react-bootstrap"
import { authGlobalState } from "../../context/authcontext/AuthContext.jsx"
import { Footer } from "../Footer/Footer.jsx"
import { Navbar } from "../Navbar/Navbar.jsx"
import CartModal from "../Modal/CartModal.jsx"
import MenuMobile from '../Modal/MenuMobile.jsx'

export const Layout = (props) => {
  return (
    <>
      <Navbar />
      <MenuMobile/>
      {props.children}
      <CartModal />
      <Footer />
    </>
  )
}
