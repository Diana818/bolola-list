import React from 'react'
import {Link} from "react-router-dom" 
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar color ="dark">
            <Container>
                <NavbarBrand href = "/">Stations</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary " to = "/Add"> Add Station</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}
