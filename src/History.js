import React, { Component } from "react";
import styled from "styled-components";
import { Animation } from "@blackbox-vision/styled-animation";

const HistoryContainer = styled.ul`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
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
	box-shadow: 0 5px 20px -5px #e18d96, 0 3px 4px -2px rgba(0, 0, 0, 0.08);
	transition: all 0.15s ease-out;

	&:hover {
		transform: scale(1.01);
		box-shadow: 0 30px 75px -15px #e18d96,
			0 25px 40px -20px rgba(0, 0, 0, 0.1);
	}

	@media only screen and (min-width: 1025px) {
		width: 40%;
	}
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
				<Animation name="fadeIn" duration="0.5s" timing="ease-in-out">
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
				</Animation>
			</div>
		);
	}
}

export default History;
