import React from 'react';
import { 
    Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem, Collapse, Nav
} from 'reactstrap';

const Header = ({item}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <Navbar container='fluid' color="secondary" expand="md" dark>
            <NavbarBrand href="/">
                <h3>fasType</h3>
            </NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    {item.map(item => (
                        <NavItem key={item.id} onClick={item.onClick}>
                            <NavLink href="#" onClick={item.onClick}><h5>{item.name}</h5></NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;