import styled from 'styled-components';

const GradientTitle = styled.h1`
text-align: center;
font-size: 60px;
margin: 5px;

background: linear-gradient(270deg, #10dfd7, #5adf10, #e9ee2a, #ee822a, #ee462a, #ee2a99, #ee2ae7, #9f2aee, #512aee, #2a7cee, #2ab0ee);
background-size: 2200% 2200%;

-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

-webkit-animation: HueRotate 46s ease infinite;
-moz-animation: HueRotate 46s ease infinite;
animation: HueRotate 46s ease infinite;


@-webkit-keyframes HueRotate {
    0%{background-position:0% 72%}
    50%{background-position:100% 29%}
    100%{background-position:0% 72%}
}
@-moz-keyframes HueRotate {
    0%{background-position:0% 72%}
    50%{background-position:100% 29%}
    100%{background-position:0% 72%}
}
@keyframes HueRotate {
    0%{background-position:0% 72%}
    50%{background-position:100% 29%}
    100%{background-position:0% 72%}
}
`;

export default GradientTitle;
