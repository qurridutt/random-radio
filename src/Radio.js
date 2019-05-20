import React, { Component } from 'react';
import axios from 'axios';

class Radio extends Component {
    constructor() {
        super();
        this.state = {
            groupId: '',
            groupTitle: '',
            groupDescription: '',
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
            <h1> {this.state.groupTitle} </h1>
        );
    }
}

export default Radio;