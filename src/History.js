import React, { Component } from "react";
import styled from "styled-components";

const HistoryContainer = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 90%;
	margin: auto;
	list-style: none;
	text-align: center;
	padding: 0;
  
`;

const HistoryListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 5px;
	background-color: #e18d96;
	color: white;
	border-radius: 5px;
	min-height: 50px;
	width: 85%;
  padding: 0px 5px 0px 5px;
  margin-top: 10px;
  transition: .35s;
`;

class History extends Component {
	constructor(props) {
		super(props);

		this.state = {
			groupsInStorage: []
		};
	}

	componentDidMount() {
		const storage = JSON.parse(localStorage.getItem("StoredGroups"));
		this.setState({ groupsInStorage: storage });
	}

	handleId = id => {
		this.props.sendId(id);
		console.log(id);
	};

	render() {
		return (
			<div>
				<HistoryContainer>
					{this.state.groupsInStorage.map(episode => {
						return (
							<HistoryListItem
								onClick={event => this.handleId(episode.id)}
							>
								{episode.title}
							</HistoryListItem>
						);
					})}
				</HistoryContainer>
			</div>
		);
	}
}

export default History;
