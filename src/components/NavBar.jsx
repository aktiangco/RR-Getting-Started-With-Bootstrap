// Creating NavBar & Button
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {

    return (
        <div>
        <Nav activeKey="/home">
            <Nav.Item>
            {/* Adding Button */}
                <Nav.Link  href="/home">Home</Nav.Link> 
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>    
            <Nav.Item>
                <Nav.Link  eventKey="/about">About Us</Nav.Link>
            </Nav.Item>
        </Nav>
        </div>
    )
}

export default NavBar