import styled from 'styled-components';

export const PageContainer = styled.div`
	min-height: 100vh;
	background: linear-gradient(to bottom, #67b26f, #4ca2cd);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const TodoContainer = styled.div`
	width: 60vw;
	height: 70vh;
	background: white;
	opacity: 0.3;
	border-radius: 0.5px;
`;

export const GithubBadge = styled.button`
	position: absolute;
	top: 15px;
	right: 50px;
	flex: 0;
	background-color: white;
	color: black;
	font-size: Helvetica;
	font-weight: 700;
	border-radius: 5px;
	opacity: 0.3;
	align-items: center;

	&:hover {
		opacity: 0.7;
	}
`;
