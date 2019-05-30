import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;


const Card = styled.figure`
  /* overflow: hidden; */
  display: table; /*Makes cards fit to content */
  border-radius: 5px;
  transition: all .15s ease-out;
	box-shadow: 0 5px 20px -5px rgba(50,50,93,.12), 0 3px 4px -2px rgba(0,0,0,.08);
  /* height: auto; */
  /* min-height: 350px; */
  width: 95%;
  /* margin: 0; */
  margin-bottom: 20px;
  
  
  &:hover {
    transform: scale(1.05);
		box-shadow: 0 30px 75px -15px rgba(50,50,93,.3), 0 25px 40px -20px rgba(0,0,0,.1);
	}

  @media only screen and (min-width: 480px) and (max-width: 1024px){
    /* Tablet */
    
    width: 40%;
    margin: 20px;
    }

  @media only screen and (min-width: 1025px) {
    /* Desktop */
    width: 30%;
    margin: 20px;
    }
`;

const CardTitle = styled.h3`
    text-align: center;
`;

const CardDescription = styled.p`
  padding: 10px;
`;

const CardImage = styled.img`
    width: 100%;
    height: 10%;
    object-fit: cover;

    @media only screen and (min-width: 1025px) {
      height: 10%;
    }
`;

const CardPlayIcon = styled.a`
  font-size: 3rem;
  color: black;
  text-decoration: none;
  margin-bottom: 5px;
  float: right;
  color: #f4afb3;
`;

const Button = styled.button`
    /* Button that randomize radio groups */
    background-color: #f4afb3;
    color: white;
    font-size: 1em;
    margin: 0.3em;
    padding: 0.25em 1em;
    border: 2px solid #f4afb3;
    height: 55px;
    width: ${props => props.secondary ? "20%" : "60%"};
    border-radius: 5px;
    font-weight: bold;

    transition: all .15s ease-out;
	  box-shadow: 0 5px 20px -5px rgba(50,50,93,.12), 0 3px 4px -2px rgba(0,0,0,.08);

    @media only screen and (min-width: 1025px) {
    /* Desktop */
    width: 30%;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 30px 75px -15px rgba(50,50,93,.3), 0 25px 40px -20px rgba(0,0,0,.1);
  	  } 
    }
`;

const HistoryIcon = styled.i`
  font-size: 1.8em;
`;

export {CardContainer, Card, CardTitle, CardDescription, CardImage, CardPlayIcon, Button, HistoryIcon};