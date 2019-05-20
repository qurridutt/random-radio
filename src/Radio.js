import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardTitle, CardDescription, CardImage } from './EpisodeCard';


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
    

    render() {
        console.log(this.state);
        return (
            <div>
                <h1> {this.state.groupTitle} </h1>
                <p> {this.state.groupDescription} </p>

                {this.state.groupId == null ? (
                    <p>Laddar.....</p>
                ) : (
                    this.state.episodes.map(episode => {
                        return (
                            <Card>
                                <CardTitle>
                                    {episode.title}
                                </CardTitle>
                                <CardDescription>
                                    {episode.description}
                                </CardDescription>
                                <CardImage src={episode.imageurltemplate} />
                            </Card>
                        )
                    })
                )
                }
            </div>
        );
    }
}

export default Radio;