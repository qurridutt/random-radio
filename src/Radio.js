import React, { Component } from 'react';
import axios from 'axios';
import { CardContainer, Card, CardTitle, CardDescription, CardImage, CardPlayIcon } from './EpisodeCard';
import styled from 'styled-components';
import RadioHeader from './RadioHeader';

const groupIds = [23030, 23031, 23032, 23033, 23034, 23035, 23036, 23037, 23038, 23039, 23040, 23041, 23042, 23043, 23047, 23060];

const RadioGroupHeader = styled.h2`
    text-align: center;
`;

const RadioGroupDescription = styled.p`
    text-align: center;
`;

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
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
      });
  }

  render() {
    return (
      <div>
        <RadioHeader />
        <RadioGroupHeader> {this.state.groupTitle} </RadioGroupHeader>
        <RadioGroupDescription> {this.state.groupDescription} </RadioGroupDescription>
        <Button primary onClick={this.getRandomRadioGroup}>Primary</Button>

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