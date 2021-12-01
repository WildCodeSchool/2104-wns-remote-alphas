import styled from 'styled-components';

/**
 * CircleAvatar provides a styled default avatar with a ninja image.
 * Set user custom picture with the src attribute.
 * Don't forget to give it an alt text for accessibility concerns.
 */

const CircleAvatar = styled.img`
width: 100px;
height: 100px;
vertical-align: middle;
border-radius: 50%;
text-align: center;
box-shadow: 13px 11px 20px 4px rgba(0,0,0,0.56);
`;

export default CircleAvatar;
