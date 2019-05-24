import React, { Component } from 'react';
import axios from 'axios';
import { CardContainer, Card, CardTitle, CardDescription, CardImage, CardPlayIcon } from './EpisodeCard';
import styled from 'styled-components';
import RadioHeader from './RadioHeader';

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
    border-radius: 3px;
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
        this.updateLocalStorage(response.data.episodegroup.id, response.data.episodegroup.title);
      });
  }

  updateLocalStorage (id, title) {
    console.log("Title to LS: " + title);
    console.log("ID to LS: " + id);


    var oldGroups = localStorage.getItem("PreviousGroups");
    if (oldGroups === null) {
      oldGroups = [];
    } else if (oldGroups.lenght > 5){
      oldGroups.shift();
    };

    let previousGroup = [title, id]
    var JSONpreviousGroup = JSON.stringify(previousGroup);
    localStorage.setItem("PreviousGroups", oldGroups + JSONpreviousGroup);

    for (var i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
    }
  };

  render() {
    return (
      <div>
        <Section>
            <RadioHeader />
            <RadioGroupHeader> {this.state.groupTitle} </RadioGroupHeader>
            <RadioGroupDescription> {this.state.groupDescription} </RadioGroupDescription>
            <Button primary onClick={this.getRandomRadioGroup}>Searchy-searchy!</Button>
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
                      <CardPlayIcon href={episode.url} className="fas fa-play-circle" />
                    </CardTitle>
                    <CardImage src={episode.imageurltemplate} />
                    <CardDescription>
                      {episode.description}
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