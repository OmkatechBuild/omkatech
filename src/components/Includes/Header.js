import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  color="dark" light expand="md">
        <NavbarBrand className="text-white" href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="">Services</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white">
                Team Solutions
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    Developers
                </DropdownItem>
                <DropdownItem >
                    Designers
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                    HR
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;