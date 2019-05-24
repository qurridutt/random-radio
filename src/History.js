import React, { Component } from 'react';
// import styled from 'styled-components';

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupsInStorage: []
    };
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem("StoredGroups"));
    this.setState({groupsInStorage: storage});
  }

  handleId = (id) => {
    this.props.sendId(id);
    console.log(id);
  }

  render() {
    return(
      <div>
        {this.state.groupsInStorage.map(episode => {
                return (
                  <ul>
                    <li onClick={event => this.handleId(episode.id)}>
                      {episode.title}
                    </li>
                  </ul>
                )
              })}
      </div>
    );
  };
}

export default History;