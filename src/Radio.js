import React, { Component } from 'react';
import axios from 'axios';
import { CardContainer, Card, CardTitle, CardDescription, CardImage, CardPlayIcon, Button, HistoryIcon } from './Theme';
import styled from 'styled-components';
import RadioHeader from './RadioHeader';
import History from './History';

const groupIds = [23030, 23031, 23032, 23033, 23034, 23035, 23036, 23037, 23038, 23039, 23040, 23041, 23042, 23043, 23047, 23060];

const RadioGroupHeader = styled.h2`
    text-align: center;
`;

const RadioGroupDescription = styled.p`
    text-align: center;
`;

const Section = styled.div`
    text-align:center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupId: null,
      groupTitle: null,
      groupDescription: null,
      episodes: [],
      showHistory: false,
      historyId: null
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

        this.setState({
          showHistory: false
        });
      });
  }

  getSpecificRadioGroup = id => {
    axios.get(`http://api.sr.se/api/v2/episodes/group?id=${id}&format=json`)
      .then((response) => {
        this.setState({
          groupId: response.data.episodegroup.id,
          groupTitle: response.data.episodegroup.title,
          groupDescription: response.data.episodegroup.description,
          episodes: response.data.episodegroup.episodes
        });

        this.addGroupToStorage(response.data.episodegroup.title, response.data.episodegroup.id);

        this.setState({
          showHistory: false
        });
      });
  }



  addGroupToStorage = (title, id) => {
    let currentGroups = JSON.parse(localStorage.getItem("StoredGroups"));
    if (currentGroups === null) {
      currentGroups = [];
    } else if (currentGroups.length === 5) {
      currentGroups.splice(0, 1);
    }

    const radioGroupToPush = {title: title, id: id};

    currentGroups.push(radioGroupToPush);
    localStorage.setItem("StoredGroups", JSON.stringify(currentGroups));
  }

  toggleHistory = event => {
    this.setState({
      showHistory: !this.state.showHistory
    });
  }

  handleHistoryId = historyId => {
    this.getSpecificRadioGroup(historyId);
  }

  render() {
    return (
      <div>
        <Section>
            <RadioHeader />
            <RadioGroupHeader> {this.state.groupTitle} </RadioGroupHeader>
            <RadioGroupDescription> {this.state.groupDescription} </RadioGroupDescription>
        </Section>
        <ButtonContainer>
            <Button onClick={this.getRandomRadioGroup}>NY RADIOSTATION</Button>
            <Button secondary onClick={this.toggleHistory}><HistoryIcon className={"fas fa-history"} /></Button>
        </ButtonContainer>
            

      <div>
        {this.state.showHistory === true ? (
          <History sendId={this.handleHistoryId} />
        ) : <p></p>
        }
      </div>

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
                      <CardPlayIcon href={episode.url} target="_blank" className="fas fa-play-circle" />
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