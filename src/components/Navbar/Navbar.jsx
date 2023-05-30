import React from "react"
import "./styles.scss"
import InputSearch from "../Search/imputSearch.jsx"
import HomeButton from "../HomeButton/HomeButton.jsx"
import { useNavigate } from "react-router-dom"
import categoriesClassification from "../../../categoriesClassification.json"
import Categories from "../Categories/Categories.jsx"
import { authGlobalState } from "../../context/authcontext/AuthContext"
import cart from "../../../public/assets/cart.svg"
import listIcon from "../../../public/assets/images/list.svg"
import profileIcon from "../../../public/assets/images/person-circle.svg"
import { Dropdown } from "react-bootstrap"

export const Navbar = () => {
  const { isLoggedIn, logout } = authGlobalState()
  const { showCart, setShowCart, menuModal, setMenuModal } =
    authGlobalState(false)

  const navigate = useNavigate()

  return (
    <section className="navbar-section">
      <div className="container-fluid">
        <div className="navbar-top row justify-content-between navbar-responsive">
          <div className=" d-flex justify-content-start align-items-center">
            <HomeButton />
          </div>
          <button
            className="menu-container"
            onClick={() => setMenuModal(!menuModal)}
          >
            <img src={listIcon} alt="list" className="menu-image" />
          </button>
          <div className=" d-flex justify-content-center align-items-center">
            <InputSearch />
          </div>
          <div className=" d-flex justify-content-end align-items-center">
            {!isLoggedIn ? (
              <div className="login-register">
                <Dropdown className="profile-button ">
                  <Dropdown.Toggle id="dropdown-basic">
                    <img
                      src={profileIcon}
                      alt="profile"
                      className="profile-image"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="/register">Register</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <button
                  className="login-button"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="register-button ml-3"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </div>
            ) : (
              <div className="login-register">
                <button className="register-button" onClick={() => logout()}>
                  <span className="logout-text">Logout</span>
                </button>
                <button
                  className="register-button ml-3"
                  onClick={() => setShowCart(!showCart)}
                >
                  <span className="cart-text">Cart</span>
                </button>
                <Dropdown className="profile-button">
                  <Dropdown.Toggle id="dropdown-basic">
                    <img
                      src={profileIcon}
                      alt="profile"
                      className="profile-image"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="/register">Register</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="navbar-bottom d-flex justify-content-center align-items-center ">
          {categoriesClassification.map((e, key) => (
            <Categories
              category={e}
              key={key}
              border={
                key === categoriesClassification.length - 1
                  ? ""
                  : "custom-border"
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Navbar
