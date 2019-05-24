import React, { Component } from 'react';
// import styled from 'styled-components';

class History extends Component {
  constructor() {
    super();

    this.state = {
      groupsInStorage: []
    };
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem("StoredGroups"));
    this.setState({groupsInStorage: storage});
  }

  render() {
    console.log(this.state.groupsInStorage);
    return(
      <div>
        {this.state.groupsInStorage.map(episode => {
                return (
                  <ul>
                    <li>
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