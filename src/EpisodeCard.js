import React, { Component } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;


const Card = styled.figure`
  background-color: #fff;
  overflow: hidden;
  border-radius: 5px;
  transition: all .15s ease-out;
	box-shadow: 0 5px 20px -5px rgba(50,50,93,.12), 0 3px 4px -2px rgba(0,0,0,.08);
  height: 300px;
  
  &:hover {
    transform: scale(1.05);
		box-shadow: 0 30px 75px -15px rgba(50,50,93,.3), 0 25px 40px -20px rgba(0,0,0,.1);
	}
  @media only screen and (min-width: 768px) {
    width: 25%;
    }
`;

const CardTitle = styled.h3`
    text-align: center;
`;

const CardDescription = styled.p`

`;

const CardImage = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
`;


export {CardContainer, Card, CardTitle, CardDescription, CardImage};