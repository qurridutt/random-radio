import React, { Component } from 'react';
import axios from 'axios';
import { CardContainer, Card, CardTitle, CardDescription, CardImage, CardPlayIcon } from './EpisodeCard';
import RandomizeBtn from './RandomizeBtn';
import styled from 'styled-components';

const RadioGroupHeader = styled.h1`
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
            episodes: []
        };
    }

    // function för random grupp id ONLOAD
    
    componentDidMount(groupId) {
        /* Call API and update state */
        axios.get('http://api.sr.se/api/v2/episodes/group?id=23037&format=json')
        .then((response) => {
          this.setState({
            groupId: response.data.episodegroup.id,
            groupTitle: response.data.episodegroup.title,
            groupDescription: response.data.episodegroup.description,
            episodes: response.data.episodegroup.episodes
          });
        });
    };


    //     const Button = styled.button`
    //     /* Adapt the colors based on primary prop */
    //     background: ${props => props.primary ? "palevioletred" : "white"};
    //     color: ${props => props.primary ? "white" : "palevioletred"};
    
    //     font-size: 1em;
    //     margin: 1em;
    //     padding: 0.25em 1em;
    //     border: 2px solid palevioletred;
    //     border-radius: 3px;
    // `;


    render() {
        console.log(this.state);
        return (
            <div>
                <RadioGroupHeader> {this.state.groupTitle} </RadioGroupHeader>
                <RadioGroupDescription> {this.state.groupDescription} </RadioGroupDescription>

                {/* <!- Randomize button */ }
                <div>
                <Button primary>Primary</Button>
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