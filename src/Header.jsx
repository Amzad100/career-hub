import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Link className='text-dark text-decoration-none' to=""><h1>CareerHub</h1></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='text-dark mx-4 text-decoration-none' to="/statistics">Statistics</Link>
                        <Link className='text-dark text-decoration-none' to="/appliedJobs">Applied Jobs</Link>
                        <Link className='text-dark mx-4 text-decoration-none' to="/blog">Blog</Link>
                    </Nav>
                    <div>
                        <Link to="/startApplying"><Button className='btn-info'>Start Applying</Button></Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;