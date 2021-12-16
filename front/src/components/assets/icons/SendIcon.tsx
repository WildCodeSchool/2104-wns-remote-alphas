import React from 'react';
import Icon from '../../core/Icon.styled';

/**
 * Display a home icon with hover effect (themed colors)
 */
const SendIcon = (): JSX.Element => (
    <Icon xmlns="http://www.w3.org/2000/svg" x="0" y="0" enable-background="new 0 0 512 512" viewBox="0 0 512 512">
        <g><circle cx="256" cy="256" fill="#ff7d81" r="256" /></g>
        <path d="m56.896 230.138 271.486 271.486c106.137-31.227 183.618-129.377 183.618-245.624 0-10.271-.605-20.401-1.781-30.356l-111.932-111.932z" fill="#f03049" />
        <g><path d="m207.16 304.84 74.702 150.264 116.425-341.391-107.451 90.343z" fill="#e9edf5" /></g>
        <g><path d="m207.16 304.84-150.264-74.702 341.391-116.425z" fill="#fff" /></g>
    </Icon>
);

export default SendIcon;
