import React from 'react';
import styled from 'styled-components';

const TimelineContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70vh;
	background-color: #292929;
`;
const Timeline = styled.div`
	height: 7px;
	width: 100%;
	background-color: white;
`;
const TimelineProgress = styled.div`
	width: 33%;
	height: 100%;
	background-color: #68d0fc;
`;
const TimelineItemsTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: -50px;
`;

const TimelineItemsBottom = styled.div`
	display: flex;
	justify-content: space-around;
`;

const Item = styled.div`
	position: relative;
	cursor: pointer;

	&::before {
		content: '';
		width: 20px;
		height: 20px;
		background-color: #68d0fc;
		display: block;
		border-radius: 100%;
	}
`;

const TimelineComponent = (): JSX.Element => (
	<TimelineContent>
		<Timeline>
			<TimelineProgress> </TimelineProgress>
			<TimelineItemsTop>
				<Item> </Item>
				<Item> </Item>
				<Item> </Item>
				<Item> </Item>
			</TimelineItemsTop>

			<TimelineItemsBottom>
				<Item> </Item>
				<Item> </Item>
				<Item> </Item>
			</TimelineItemsBottom>
		</Timeline>
	</TimelineContent>
);

export default TimelineComponent;
