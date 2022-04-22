import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../provider/AuthProvider/AuthProvider';
import { LinkClass, LogoutButton } from './Styles';

export const Header = () => {
	const logout = () => AuthProvider.instance.logout().then(() => window.location.reload());

	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand>Newlist</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link>
						<Link style={LinkClass} to="">
							Home
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link style={LinkClass} to="create">
							Create new
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link style={LinkClass} to="../profile">
							My profile
						</Link>
					</Nav.Link>
				</Nav>
				<LogoutButton onClick={logout}>Logout</LogoutButton>
			</Container>
		</Navbar>
	);
};
