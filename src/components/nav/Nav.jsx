import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import AppCart from "../cart/AppCart";
import AppDropDown from "./AppDropDown";
import AppSearchBar from "./AppSearchBar";
import NavLogo from "./NavLogo";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useContext } from "react";
import { CategoryContext } from "../../section/Nav";
const NavComp = () => {
  const { categories, activeCategory, handleChangeCategory } =
    useContext(CategoryContext);
  return (
    <>
      {[true].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3 blue-color"
        >
          <Container fluid style={{ flexWrap: "wrap" }}>
            <NavLogo />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-grow-1 pe-3">
                  <DropdownButton
                    variant="outline-secondary"
                    title={activeCategory}
                    id="input-group-dropdown-1"
                  >
                    {categories.map((category) => (
                      <Dropdown.Item
                        onClick={() => handleChangeCategory(category)}
                        key={category}
                        active={activeCategory === category ? true : false}
                      >
                        {category}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <AppSearchBar />
                  <AppDropDown />
                </Nav>
                <AppCart />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
export default NavComp;
