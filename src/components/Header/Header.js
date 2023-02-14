import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink className="navbar-brand" to="/">
                    Shop-Bi
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" to="/user">
                            User
                        </NavLink>
                        <NavLink className="nav-link" to="/admin">
                            Admin
                        </NavLink>
                        <NavLink className="nav-link" to="/profile">
                            Profile
                        </NavLink>
                    </Nav>
                    <Nav>
                        <NavDropdown title="settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>Đăng nhập</NavDropdown.Item>
                            <NavDropdown.Item>Đăng xuất</NavDropdown.Item>
                            <NavDropdown.Item>
                                Thông tin cá nhân
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
