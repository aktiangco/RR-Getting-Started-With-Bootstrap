import Form from 'react-bootstrap/Form';

const NavBar = () => {

    return (
        <div>
            <Form.Group>
                <Form.Label>Form Dropdown with favorite movies</Form.Label>
                    <Form.Control as="select">
                        <option>Inception</option>
                        <option>Forrest Gump</option>
                        <option>Shawshank Redemption</option>
                        <option>Spiderman: Into the Spiderverse</option>
                        <option>Avengers: Endgame</option>
                    </Form.Control>
            </Form.Group>
        </div>
    )
}

export default NavBar