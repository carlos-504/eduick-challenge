import { createGlobalStyle } from 'styled-components';

// Global Variables
// Dashboard
export const white = '#ffffff';
export const beige = '#ffe8b2';
export const primaryPurple = '#7955e8';
export const borderColor = '#ffffff8a';
export const primaryDetailColor = '#ffeaa4';
export const secondaryDetailColor = '#864efd';
export const circleDetailColor = '#ffc700';
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

/* input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* css dos checkbox  
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--outline-color);
  border-radius: 50%;
  background-color: var(--white);
margin-left: 15px;
  margin-right: 15px;
}


input[type="radio"]:focus{
  outline: none;
} */

label {
  display: inline-block;
  width: 150px;
  /* padding: 10px; */
  /* border: solid 2px #ccc; */
  transition: all 0.3s;
  /* color: white */

  & img {
	width: 20px;
	height: 20px;
	background-color: yellow;
	border-radius: 50%;
  }
}

/* input[type="radio"]:checked{
  border: 6px solid red;
  background-color: white;
} */
input[type="radio"] {
  display: none;
}

/* input[type="radio"]:checked + label {
  border: solid 2px green;
} */

`;
