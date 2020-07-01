import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <span className="text">
                &copy; {new Date().getFullYear()} All Rights Reserved...
            </span>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.div`
    background: #344;
    height: 4rem;
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;

    .text {
        color: #fff;
        position: relative;
        top: 1.5rem;
        left: 1rem;
    }
`;
