import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import Admin from './components/admin/Admin';
import SignInPage from './components/authentication/SignInPage';
import SignUpPage from './components/authentication/SignUpPage';
import OfficeCoursesList from './components/backOffice/components/OfficeCoursesList';
import Office from './components/backOffice/Office';
import ChatInterface from './components/chatRoom/ChatInterface';
import Context from './components/context/Context';
import ThemeUpdateContext from './components/context/ThemeUpdateContext';
import Home from './components/Home';
// import Help from './components/help/Help';
import LandingPage from './components/LandingPage';
import Settings from './components/settings/Settings';
import SingleCourse from './components/SingleCourse';
import Layout from './components/templates/Layout.styled';
import Timeline from './components/timeline/Timeline.styled';
import Wiki from './components/wiki/Wiki';
import darkTheme from './theme/darkTheme';
import { ME } from './utils/apollo';
import { ROLES, User } from './utils/types';

function Router(): JSX.Element {
  const httpLink = createHttpLink({
    uri:
      process.env.NODE_ENV === 'production' ? '/graphql' : process.env.REACT_APP_API_DEV,
  });

  const wsLink = new WebSocketLink({
    uri:
      process.env.NODE_ENV === 'production'
        ? 'wss://les-alphas.wns.wilders.dev/graphql'
        : 'ws://localhost:8080/graphql',

    options: {
      reconnect: true,
    },
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token');
    return {
      headers: {
        ...headers,
        authorization: token,
      },
    };
  });

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    authLink.concat(httpLink),
  );

  const client = new ApolloClient({
    uri: process.env.REACT_APP_API_DEV,
    cache: new InMemoryCache(),
    link: splitLink,
    connectToDevTools: process.env.NODE_ENV !== 'production',
  });

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);
  const [userTheme, setUserTheme] = useState(darkTheme);

  const updateTheme = useCallback(
    (changes: Partial<DefaultTheme>) => {
      setUserTheme({ ...userTheme, ...changes });
    },
    [userTheme, setUserTheme],
  );

  function updateColors() {
    const userColors = user.settings.colors.customColors;
    if (user.settings.colors.theme !== 'custom') {
      return;
    }
    setUserTheme({
      ...darkTheme,
      colors: {
        ...darkTheme.colors,
        primary: userColors[0],
        secondary: userColors[1],
        tertiary: userColors[2],
        quaterny: userColors[3],
        lightBackground: userColors[4],
        textColor: userColors[5],
      },
    });
  }

  useEffect(() => {
    if (user._id) {
      updateColors();
    }
  }, [user]);

  useEffect(() => {
    const isValidToken = localStorage.getItem('token');
    setIsLogin(!!isValidToken);
    if (!user || !user._id) {
      const res = localStorage.getItem('user');
      if (res) {
        const userData = JSON.parse(res);
        setUser(userData);
      } else if (isValidToken) {
        client.mutate({ mutation: ME }).then((result) => {
          if (result) {
            const {
              data: { me },
            } = result;
            setUser(me);
            localStorage.setItem('user', JSON.stringify(me));
          }
        });
      }
    }
  }, [isLogin, user]);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ThemeProvider theme={userTheme}>
          <ThemeUpdateContext.Provider value={updateTheme}>
            <Context.Provider
              value={{
                client,
                isLogin,
                setIsLogin,
                user,
                setUser,
              }}>
              {!isLogin ? (
                <>
                  <Route exact path="/">
                    <LandingPage />
                  </Route>
                  <Route exact path="/signin">
                    <SignInPage />
                  </Route>
                  <Route exact path="/signup">
                    <SignUpPage />
                  </Route>
                </>
              ) : (
                <Layout>
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route exact path="/courses">
                      <Timeline />
                    </Route>
                    <Route exact path="/wiki">
                      <Wiki />
                    </Route>
                    {/* <Route exact path="/help">
												<Help />
											</Route> */}
                    <Route exact path="/chat">
                      Chat
                    </Route>
                    <Route exact path="/timeline-courses">
                      Timeline-courses
                    </Route>
                    <Route exact path="/settings">
                      <Settings />
                    </Route>
                    <Route exact path="/courses/:id">
                      <SingleCourse />
                    </Route>
                    <Route exact path="/chatRoom">
                      <ChatInterface />
                    </Route>
                    {(user?.role === ROLES.TEACHER || user?.role === ROLES.ADMIN) && (
                      <Route exact path="/backoffice">
                        <Office />
                      </Route>
                    )}
                    <Route exact path="/backoffice">
                      {user?.role === ROLES.STUDENT ? (
                        <Redirect to="/" />
                      ) : (
                        <Route exact path="/backoffice">
                          <Office />
                        </Route>
                      )}
                    </Route>
                    {user?.role === ROLES.ADMIN ? (
                      <Route exact path="/admin">
                        <Admin />
                      </Route>
                    ) : (
                      <Redirect to="/" />
                    )}
                  </Switch>
                </Layout>
              )}
            </Context.Provider>
          </ThemeUpdateContext.Provider>
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default Router;
