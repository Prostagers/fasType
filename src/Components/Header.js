import React from 'react';
import { 
    Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem, Collapse, Nav, DropdownToggle,
    DropdownMenu, DropdownItem, UncontrolledDropdown, NavbarText
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Navbar container='fluid' color="secondary" expand="md" dark>
            <NavbarBrand href="/">
                <h3>fasType</h3>
            </NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="#">
                            <h5>Login</h5>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <h5>Register</h5>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;