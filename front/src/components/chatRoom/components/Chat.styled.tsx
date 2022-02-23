import styled from 'styled-components';

const MainContent = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: '#292929';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ChatBox = styled.div<{ isAuthor?: boolean }>`
  width: 70%;
  height: 70%;
  overflow: scroll;
  background-color: ${(props) => props.theme.colors.opposite};
  border-radius: ${(props) => props.theme.fixedSize.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const AuthorName = styled.div<{ isAuthor?: boolean }>`
  font-weight: ${(props) => (props.isAuthor ? 600 : 400)};
  display: flex;
  justify-content: left;
  align-items: center;
  color: #434343;
  margin-top: 10px;
  margin-left: 8%;
  font-size: 0.8rem;
`;

const FieldLabel = styled.label`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 3.5rem;
  border-radius: ${(props) => props.theme.fixedSize.borderRadius};
  color: ${(props) => props.theme.colors.primary};
  background-color: white;
  :focus-within {
    outline: 2px solid ${(props) => props.theme.colors.secondary};
  }
`;

const ChatForm = styled.form`
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid white;
  height: 3rem;
  outline: none;
  border-radius: ${(props) => props.theme.fixedSize.borderRadius};
  color: #292929;
  font-size: 1rem;
`;
const ButtonSend = styled.button`
  background-color: transparent;
  border: none;
  height: 50px;
  width: 50px;
  margin-right: 2rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export { AuthorName, ButtonSend, ChatBox, ChatForm, FieldLabel, Input, MainContent };
