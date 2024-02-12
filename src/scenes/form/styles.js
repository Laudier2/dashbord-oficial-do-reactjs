import styled from "@emotion/styled";


export const UlLista = styled.div`

	& .listagem {

		display: inline-block;
		border: solid 1px ;
		margin: 3px;
		height: 170px;
		margin-top: 5px;

		& button {
			width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background: none;
      cursor: pointer;
			margin-bottom: 3px;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
		}

		& img {
			width: 100%;
      height: 100px;
			margin: auto;
			display: flex;
		}

		& p {
			max-width: 18ch;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			text-align: center;
			margin-bottom: -20px;
			color: white;
		}

		& h4 {
			text-align: center;
      font-size: 20px;
      margin-bottom: 10px;
			margin-top: -1px;

			& .dellIcon {
				border: solid 1px;
				cursor: pointer;
				margin-left: 10px;

				&:hover {
					background: aqua;
					color: red;
				}
			}

			
		}

		@media (max-width: 768px) {
			width: 80px;
			height: 180px;

			& button {
			width: 80px;
      height: 100%;
      border: none;
      outline: none;
      background: none;
      cursor: pointer;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
      }
		}

			& p {
				max-width: 18ch;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				text-align: center;
				margin-bottom: -20px;
				color: white;
			}

			& h4 {
				text-align: center;
				font-size: 15px;
				margin-bottom: 10px;
			}
		}
	}
  
  & ul {
		border: solid 1px;

    & li {
			list-style-type: none;
			display: inline-block;
			cursor: pointer;
			text-align: center;

			padding: 5px;
			& img {
				width: 100px;
				height: 100px;
			}
			& h5 {
				margin-top: 5px;
				font-size: 0.7vw;
			}

			&:hover {
				background: aqua;
				color: #000000;
			}
    }
  }
`;

