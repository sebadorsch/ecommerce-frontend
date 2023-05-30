import { Button, Modal, ModalFooter } from "react-bootstrap"
import { authGlobalState } from "../../context/authcontext/AuthContext"
import { useEffect, useState } from "react"
import "./styles1.scss"
import exit from "./exit.svg"

const MenuMobile = () => {
  const { menuModal, setMenuModal } = authGlobalState(false)
  return (
    <>
      <Modal
        id="carrito-modal"
        show={!!menuModal}
        onHide={() => setMenuModal()}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>Categories</Modal.Title>
          <button className="exit-button" onClick={() => setMenuModal()}>
            <img src={exit} style={{ border: "none" }}></img>
          </button>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MenuMobile
