import React, { Component } from 'react';
import styled from 'styled-components';
import radiologo from './radio.svg';


const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
    box-shadow:  0px 0px #77aaff,
		 0px 0px #77aaff,
		 0px 3px 2px -2px rgba(50,50,93,.12),
		 0px 0px #77aaff,
		 0px 0px #77aaff;
`;


const RadioLogo = styled.img`
    width: 20%;
    height: auto;
`;

const RadioHeading = styled.h1`

`;

class RadioHeader extends Component {
    render() {
        return (
            <HeaderContainer>
                <RadioLogo src={radiologo} />
                <RadioHeading>Random Radio</RadioHeading>
            </HeaderContainer>
        );
    };
};


export default RadioHeader;