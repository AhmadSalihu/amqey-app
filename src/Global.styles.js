import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	body{
	font-family: 'Open Sans Condensed';
  padding: 0px 0px;

	 @media screen and(max-width: 800px) {
    padding: 10px;
  }
	
a{
	list-style: none;
	text-decoration: none;
}

a:hover{
	text-decoration: none;
	color: #ff8000;
}
*{
	box-sizing: border-box;
}
	}
`