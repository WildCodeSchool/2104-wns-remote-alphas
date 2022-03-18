import { ApolloError, useMutation } from '@apollo/client';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { LOGIN, ME, SIGNUP } from '../../utils/apollo';
import { User } from '../../utils/types';
import Context from '../context/Context';
import TextButton from '../core/buttons/TextButton.styled';
import Divider from '../core/Divider.styled';
import ErrorMessage from '../core/ErrorMessage';
import GradientBackground from '../core/GradientBackground.styled';
import AuthField from './components/AuthField.styled';
import Button from './components/Button.styled';
import Form from './components/Form.styled';
import FormCard from './components/FormCard.styled';
import FormContainer from './components/FormContainer.styled';
import H1 from './components/typos/H1.styled';
import Wrapper from './components/Wrapper.styled';

export default function SignUpPage(): JSX.Element {
  const initialState = {
    name: '',
    email: '',
    firstName: '',
    password: '',
    roles: ['student'],
  };
  const initialErrorState = {
    status: false,
    message: '',
  };
  const [userLog, setUserLog] = useState(initialState);
  const [errorState, setErrorState] = useState(initialErrorState);
  const [signupMutation] = useMutation<{ signup: User }>(SIGNUP);
  const [loginMutation] = useMutation<{ login: string }>(LOGIN);
  const [userMutation] = useMutation<{ me: User }>(ME);
  const history = useHistory();

  const { setIsLogin, setUser } = useContext(Context);

  function handleClick() {
    history.push('/signin');
  }

  async function handleSubmit() {
    try {
      const signupResult = await signupMutation({
        variables: {
          ...userLog,
        },
      });
      if (signupResult.data?.signup) {
        const loginResult = await loginMutation({
          variables: {
            email: userLog.email,
            password: userLog.password,
          },
        });
        if (typeof loginResult.data?.login === 'string') {
          localStorage.setItem('token', loginResult.data.login);

          if (setIsLogin) {
            setIsLogin(true);
          }

          const meResult = await userMutation({});

          if (meResult.data?.me._id) {
            setUser({ ...meResult.data.me });
            localStorage.setItem('user', JSON.stringify(meResult.data.me));
          }
          history.push('/');
        } else {
          setErrorState({
            message: 'Oops something went wrong, try again',
            status: true,
          });
        }
      } else {
        setUserLog(initialState);
      }
    } catch (err) {
      if (err instanceof ApolloError) {
        setErrorState({ message: err.message, status: true });
      }
    }
  }

  return (
    <GradientBackground>
      <Wrapper>
        <FormCard>
          <H1>Create an account</H1>
          <p style={{ textAlign: 'center', color: 'white' }}>
            fill out this form to register on Masterize
          </p>
          <FormContainer>
            <Form>
              <AuthField
                name="firstName"
                label="Firstname"
                type="text"
                onChange={(e) => {
                  setUserLog({ ...userLog, [e.target.name]: e.target.value });
                }}
                value={userLog.firstName}
                placeholder="Jane"
              />
              <AuthField
                name="name"
                label="Name"
                type="text"
                onChange={(e) => {
                  setUserLog({ ...userLog, [e.target.name]: e.target.value });
                }}
                value={userLog.name}
                placeholder="Doe"
              />
              <AuthField
                name="email"
                label="Email"
                type="email"
                onChange={(e) => {
                  setUserLog({ ...userLog, [e.target.name]: e.target.value });
                }}
                value={userLog.email}
                placeholder="jane.doe@domain.com"
              />
              <AuthField
                name="password"
                label="Password"
                type="password"
                onChange={(e) => {
                  setUserLog({ ...userLog, [e.target.name]: e.target.value });
                }}
                value={userLog.password}
                placeholder="********"
              />
              <Button
                type="button"
                value="Signup"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                Sign up
              </Button>
              {errorState.status && <ErrorMessage>{errorState.message}</ErrorMessage>}
            </Form>
          </FormContainer>
          <Divider style={{ width: '70%', marginTop: '1.5em' }} />
          <TextButton accent onClick={() => handleClick()}>
            I already have an account
          </TextButton>
        </FormCard>
      </Wrapper>
    </GradientBackground>
  );
}
