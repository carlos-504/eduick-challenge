import { createGlobalStyle } from 'styled-components';

// Global Variables
export const white = '#ffffff';
export const grey = '#f1f5f7';
export const strongGrey = '#e5e5e5';
export const black = '#343434';
export const beige = '#ffe8b2';
export const primaryPurple = '#7955e8';
export const borderColor = '#ffffff8a';
export const primaryDetailColor = '#ffeaa4';
export const secondaryDetailColor = '#864efd';
export const circleDetailColor = '#ffc700';
export const circleDetailColorSec = '#ffb800';
export const yellow = '#ffd74f';
export const strongPurple = '#200e64';
export const strongPurpleSec = '#431bda';
export const fontDash = 'Poppins';

// Reset CSS
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.Toastify__toast-body {
  font-weight: bold;
}
`;
