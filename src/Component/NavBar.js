import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import '../CSS/NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div className="navbar-pos">
            <Navbar fixed="top" style={{ height: "90px", backgroundColor: "black" }}>
                <Container >
                    <Navbar.Brand href="#">
                        <DragHandleIcon style={{ position: "relative", width: "45px", height: "50px", color: "hsla(0,0%,100%,.4)" }} />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="menu-text-wrapper" style={{ color: "#fff" }}>
                            MENU
                        </Nav.Link>
                        <Nav.Link href="#" className="NavBar_text_techwondoe">
                            <img
                                src="https://uploads-ssl.webflow.com/61151a6979644d46e49e429b/6130c5894de4226268ff5bfe_Techwondo%20Logo%20White.svg"
                                width="200"
                                height="27.75"
                                alt="Techwondoe logo"
                            />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar;