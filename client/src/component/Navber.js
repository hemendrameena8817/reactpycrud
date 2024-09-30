import React from "react";
import { Navbar, Nav, NavLink } from 'react-bootstrap';  



const NavBarMenu = () => {
  return (
    <Navbar bg="light" expand="lg"> 
      <Navbar.Brand href="#home">Product</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Nav className="mr-auto">
               
               <NavLink to="/">products</NavLink>
               <NavLink to="/addProduct"> AddProduct</NavLink>
            </Nav>
     
    </Navbar>
  );
};



export default NavBarMenu;
