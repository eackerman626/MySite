import React, { Component } from 'react';
import { Navbar, Dropdown } from 'react-bootstrap';

class MyNavbar extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Navbar fluid variant="dark" bg="dark" className="justify-content-between">
				<Navbar.Brand href="/">Home</Navbar.Brand>

				<Dropdown>
					<Dropdown.Toggle>Menu</Dropdown.Toggle>
					<Dropdown.Menu alignRight>
						<Dropdown.Item onClick={window.print}>Print</Dropdown.Item>
						<Dropdown.Item>Save as PDF</Dropdown.Item>
						<Dropdown.Item>Download Data</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar>
		);
	}
}
export default MyNavbar;
