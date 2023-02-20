import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { Cinzel, Lato } from '@next/font/google'
import { themeFontFamily } from './theme'

const cinzelFont = Cinzel({ weight: '700', subsets: ['latin'] })
const latoFont = Lato({ weight: '400', subsets: ['latin'] })

const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
//========================================================================================================
// GENERAL
//========================================================================================================
:root {
	--cinzel-font: ${cinzelFont.style.fontFamily};
	--lato-font: ${latoFont.style.fontFamily};
}
* {
	box-sizing: border-box;
}
*::before {
	box-sizing: border-box;
}
*::after {
	box-sizing: border-box;
}

body {
	font-family: ${themeFontFamily.lato};
	font-size: 16px;
	font-weight: 400;
	letter-spacing: 0px;
	line-height: 150%;
	color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
}

/* width */
::-webkit-scrollbar {
	width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
	background: ${({ theme }) => theme.colors.black};
	border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background:  ${({ theme }) => theme.colors.darkGrey};
	height: 24px;
	width: 24px;
	border-radius: 10px;
	cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
	background:  ${({ theme }) => theme.colors.gold};
}
`

export default GlobalStyle
