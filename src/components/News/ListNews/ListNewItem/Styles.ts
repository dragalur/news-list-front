import styled from 'styled-components';

export const New = styled.div`
	flex: 0 0 47%;
	min-height: 300px;
	max-width: 47%;
	padding: 10px;
	border-radius: 20px;
	position: relative;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	transition: 1s;
	overflow-wrap: break-word;

	&:hover {
		box-shadow: #009688 0px 5px 15px;
		transform: scale(1.05);
	}
`;

export const NewName = styled.p`
	font-size: 1.4rem;
`;

export const NewText = styled.p`
	font-size: 1.1rem;
`;

export const NewFooter = styled.footer`
	height: 1.5rem;
	width: 100%;
	padding: 0 10px;
	box-sizing: border-box;
	position: absolute;
	bottom: 0;
	left: 0;
	border-top: 1px solid white;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	display: flex;
	justify-content: space-between;
`;

export const NewFooterText = styled.p`
	font-size: 0.8rem;
`;
