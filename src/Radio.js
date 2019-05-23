import React, { Component } from 'react';
import axios from 'axios';
import { CardContainer, Card, CardTitle, CardDescription, CardImage, CardPlayIcon } from './EpisodeCard';
import styled from 'styled-components';

const RadioGroupHeader = styled.h1`
    text-align: center;
`;

const RadioGroupDescription = styled.p`
    text-align: center;
`;

class Radio extends Component {
    constructor() {
        super();
        this.state = {
            groupId: null,
            groupTitle: null,
            groupDescription: null,
            episodes: []
        };
    }

    componentDidMount() {
        axios.get('http://api.sr.se/api/v2/episodes/group?id=23039&format=json')
        .then((response) => {
          this.setState({
            groupId: response.data.episodegroup.id,
            groupTitle: response.data.episodegroup.title,
            groupDescription: response.data.episodegroup.description,
            episodes: response.data.episodegroup.episodes
          });
        });
    };
    

    render() {
        console.log(this.state);
        return (
            <div>
                <RadioGroupHeader> {this.state.groupTitle} </RadioGroupHeader>
                <RadioGroupDescription> {this.state.groupDescription} </RadioGroupDescription>

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