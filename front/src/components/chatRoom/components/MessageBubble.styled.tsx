import styled from 'styled-components';

import { User } from '../../../utils/types';
import Column from '../../core/layout_parts/Column.styled';

const Bubble = styled.span<{ isAuthor?: boolean }>`
  background-color: ${(props) =>
    props.isAuthor ? props.theme.colors.secondary : '#687385'};
  height: fit-content;
  min-height: 1.5em;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 5%;
  border-radius: ${(props) => props.theme.fixedSize.borderRadius};
  padding: 1em;
`;

const MessageText = styled.span<{ isAuthor?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  text-align: ${(props) => (props.isAuthor ? 'right' : 'left')};
`;

const PostDate = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #434343;
  min-width: 5vw;
  font-size: 0.7rem;
`;

interface BubbleProps {
  message: string;
  time: Date;
  author: User;
  user: User;
}
const MessageBubble = ({
  message = '',
  time,
  author,
  user,
}: BubbleProps): JSX.Element => (
  <Bubble isAuthor={user.firstName === author.firstName}>
    <Column style={{ margin: 'unset' }}>
      <MessageText>{message}</MessageText>
      <PostDate>
        {new Date(time).getHours()}:{new Date(time).getMinutes()}
      </PostDate>
    </Column>
  </Bubble>
);

export default MessageBubble;
