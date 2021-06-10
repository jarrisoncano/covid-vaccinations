import styled from 'styled-components'

export const TargStyled = styled.div`
	background-color: #c3c1d9;
	border: 1px solid #ce225e;
	border-radius: 1rem;
	box-shadow: 0rem 0rem 0.7rem black;

	display: flex;
	flex-direction: column;
	height: 7rem;
	justify-content: space-between;

	text-align: ${(props) => (props.center ? 'center' : 'left')};
	padding: 1rem;
	width: 23rem;

	h2 {
		color: #494898;
		font-size: 1.6rem;
	}

	p {
		color: #ce225e;
		font-size: 2.2rem;
		font-weight: 700;
	}

	@media (max-width: 850px) {
		align-items: center;
		text-align: center;
		width: 90%;

		h2 {
			font-size: 1.5rem;
		}
	}
`
