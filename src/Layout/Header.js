import React, { useContext } from 'react';
import GlobalContext from '../Context/GlobalContext';
import { 
    Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem, Collapse, Nav
} from 'reactstrap';

const Header = () => {
    const context = useContext(GlobalContext);
    const [isOpen, setIsOpen] = React.useState(false);
    
    const item = context.headerBeforeLogin;

    return (
        <Navbar container='fluid' color="secondary" expand="md" dark>
            <NavbarBrand href="/">
                <h2>fasType</h2>
            </NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    {item.map(item => (
                        <NavItem key={item.id} onClick={item.onClick}>
                            <NavLink href={item.link} ><h5>{item.name}</h5></NavLink>
                        </NavItem>
                    ))}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;