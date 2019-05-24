import React, { Component } from 'react';
import axios from 'axios';
import { CardContainer, Card, CardTitle, CardDescription, CardImage, CardPlayIcon } from './EpisodeCard';
import styled from 'styled-components';
import RadioHeader from './RadioHeader';
import History from './History';

const groupIds = [23030, 23031, 23032, 23033, 23034, 23035, 23036, 23037, 23038, 23039, 23040, 23041, 23042, 23043, 23047, 23060];

const RadioGroupHeader = styled.h2`
    // Logo and Radio-icon
    text-align: center;
`;

const RadioGroupDescription = styled.p`
    // Description of the radio Group
    text-align: center;
`;

const Button = styled.button`
    /* Button that randomize radio groups */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    height: 55px;
    width: 80%;
    border-radius: 5px;

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

const Section = styled.div`
    // Section contains everything above radio-cards
    text-align:center; // Centers all content above cards
`;

class Radio extends Component {
  constructor() {
    super();
    this.state = {
      groupId: null,
      groupTitle: null,
      groupDescription: null,
      episodes: [],
    };
  }

  componentDidMount() {
    /* Call API and update state */
    this.getRandomRadioGroup();
  };

  getRandomRadioGroup = event => {
    /* Function that is called on click on randomize button
    Makes a new API-call and updates state with new values */
    const randomId = groupIds[Math.floor(Math.random() * groupIds.length)];
    axios.get(`http://api.sr.se/api/v2/episodes/group?id=${randomId}&format=json`)
      .then((response) => {
        this.setState({
          groupId: response.data.episodegroup.id,
          groupTitle: response.data.episodegroup.title,
          groupDescription: response.data.episodegroup.description,
          episodes: response.data.episodegroup.episodes
        });
        this.addGroupToStorage(response.data.episodegroup.title, response.data.episodegroup.id);
      });
  }

  addGroupToStorage = (title, id) => {
    let currentGroups = JSON.parse(localStorage.getItem("StoredGroups"));
    if (currentGroups === null) {
      currentGroups = [];
    } else if (currentGroups.length == 5) {
      currentGroups.splice(0, 1);
    }

    const radioGroupToPush = {title: title, id: id};

    currentGroups.push(radioGroupToPush);
    localStorage.setItem("StoredGroups", JSON.stringify(currentGroups));
  }

  render() {
    return (
      <div>
        <History />
        <Section>
            <RadioHeader />
            <RadioGroupHeader> {this.state.groupTitle} </RadioGroupHeader>
            <RadioGroupDescription> {this.state.groupDescription} </RadioGroupDescription>
            <Button primary onClick={this.getRandomRadioGroup}>NY RADIOSTATION</Button>
            {/* Localstorage list here! */}
        </Section>

        <CardContainer>
          {this.state.groupId == null ? (
            <p>Laddar.....</p>
          ) : (
              this.state.episodes.map(episode => {
                return (
                  <Card>
                    <CardTitle>
                      {episode.title}
                    </CardTitle>
                    <CardImage src={episode.imageurltemplate} />
                    <CardDescription>
                      {episode.description}
                      <CardPlayIcon href={episode.url} className="fas fa-play-circle" />
                    </CardDescription>
                  </Card>
                )
              })
            )
          }
        </CardContainer>
      </div>
    );
  }
}

export default Radio;