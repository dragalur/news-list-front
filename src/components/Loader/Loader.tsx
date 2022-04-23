import React from 'react';
import { Spinner } from 'react-bootstrap';
import { LoaderBlock } from './Styles';

export const Loader = () => {
	return (
		<LoaderBlock>
			<Spinner animation="border" style={{ width: '10rem', height: '10rem' }} />
		</LoaderBlock>
	);
};
