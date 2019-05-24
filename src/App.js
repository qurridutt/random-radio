import React from 'react';
import Radio from './Radio';
import styled from 'styled-components';

const AppContainer = styled.div`
    font-family: 'Inter UI', sans-serif;
    /* background-color: #fefefe; */
`;

export default function App() {
  return (
    <AppContainer>
      <Radio />
    </AppContainer>
  )
};