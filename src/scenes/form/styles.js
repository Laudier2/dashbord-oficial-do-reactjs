import styled from "@emotion/styled";


export const UlLista = styled.div`
  
  & ul {
		border: solid 1px;

    & li {
			list-style-type: none;
			display: inline-block;
			cursor: pointer;
			text-align: center;

			padding: 5px;
			& img {
				width: 60px;
				height: 8vh;
			}
			& h5 {
				margin-top: 5px;
				font-size: 1vw;
			}

			&:hover {
				background: aqua;
				color: #000000;
			}
    }
  }
`;

