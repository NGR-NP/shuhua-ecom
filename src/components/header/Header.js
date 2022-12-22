// import './header.css'
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { FaCartPlus } from 'react-icons/fa';
// import { BsPersonFill } from 'react-icons/bs';
// import { IconContext } from "react-icons";
// import { createContext, useContext, useState } from 'react';


// export const CategoryContext = createContext([])
// function AppLogo() {
//     return (
//         <>
//             <Navbar.Brand href="#">MegaMart</Navbar.Brand>
//         </>
//     )
// }
// function AppSearchBar() {

//     const {categories,activeCategory, handleChangeCategory}= useContext(CategoryContext)
//     return (
//         <>
//             <InputGroup >
//                 <DropdownButton
//                     variant="outline-secondary"
//                     title={activeCategory}
//                     id="input-group-dropdown-1"
//                 >
//                     {categories.map((category)=>( <Dropdown.Item onClick={()=>handleChangeCategory(category)} key={category} active={activeCategory===category?true:false}>{category}</Dropdown.Item>))}
            

//                 </DropdownButton>
//                 <Form.Control aria-label="Text input with dropdown button" />     
//             </InputGroup>
//         </>
//     )
// }

// function AppDropDown() {

//     const {categories,activeCategory, handleChangeCategory}=useContext(CategoryContext)
//     return (
//         <>
//             <Dropdown>
//                 <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
//                    {activeCategory}
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu variant="dark">
//                 {categories.map((category)=>( <Dropdown.Item onClick={()=>handleChangeCategory(category)} key={category} active={activeCategory===category?true:false}>{category}</Dropdown.Item>))}
//                 </Dropdown.Menu>
//             </Dropdown>
//         </>
//     )
// }
// function AppCart() {
//     return (
//         <>
//             <Form >
//                 <IconContext.Provider value={{ style: { color: '#008ECC', fontSize: '25px', marginRight: '10px' } }}>
//                     <FaCartPlus />
//                     <BsPersonFill />
//                 </IconContext.Provider>
//             </Form>
//         </>
//     )
// }
// // function AppNavbar() {

//     // const [activeCategory, setActiveCAtegory]=useState("A")

//     // const handleChangeCategory= (category)=>{
//     //     setActiveCAtegory(category)
//     // }
//     // return (
//         // <CategoryContext.Provider value={{categories:["All Categories","A","B","C"], handleChangeCategory, activeCategory}}>
//         //     {[true].map((expand) => (
//         //         <Navbar key={expand} bg="light" expand={expand} className="mb-3 blue-color">
//         //             <Container fluid>
//         //                 <AppLogo />
//         //                 <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//         //                 <Navbar.Offcanvas
//         //                     id={`offcanvasNavbar-expand-${expand}`}
//         //                     aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//         //                     placement="end"
//         //                 >
//         //                     <Offcanvas.Header closeButton>
//         //                         <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//         //                             Offcanvas
//         //                         </Offcanvas.Title>
//         //                     </Offcanvas.Header>
//         //                     <Offcanvas.Body>
//         //                         <Nav className="flex-grow-1 pe-3">
//         //                             <AppSearchBar />
//         //                             <AppDropDown />
//         //                         </Nav>
//         //                         <AppCart />
//         //                     </Offcanvas.Body>
//         //                 </Navbar.Offcanvas>
//         //             </Container>
//         //         </Navbar>
//         //     ))}</CategoryContext.Provider>
// //     )
// // }
// function Header() {
//     return (
//         <>
//             <AppNavbar />
//         </>
//     );
// }

// export default Header;

