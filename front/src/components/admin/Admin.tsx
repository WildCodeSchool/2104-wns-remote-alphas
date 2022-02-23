import { ApolloError, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';

import { GET_USERS, UPDATE_ROLE } from '../../utils/apollo';
import { ROLES, User } from '../../utils/types';
import FilterIcon from '../assets/icons/FilterIcon';
import ErrorMessage from '../core/ErrorMessage';

const Container = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
  @media screen and (min-width: 780px) {
    flex-direction: row;
  }
`;

const UsersContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: white;
`;

const TitleContainer = styled.div`
  display: flex;
  @media screen and (max-width: 780px) {
    text-align: center;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 780px) {
    text-align: start;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const Title = styled.h1`
  width: 50%;
`;

const FilterContainer = styled.label`
  width: 50%;
`;

const LabelContainer = styled.div``;

const Li = styled.li`
  margin-bottom: 20px;
  max-width: 780px;
  width: 100%;
  list-style: none;
`;

const UserDetails = styled.details`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5px;
  border-bottom: solid 3px ${({ theme }) => theme.colors.secondary};
  &[open] > summary {
    border-bottom: solid 1px ${({ theme }) => theme.colors.secondary};
    padding-bottom: 5px;
  }
`;

const UserSummary = styled.summary`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 780px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Button = styled.button`
  border-radius: 9999px;
  width: 150px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-top: 10px;
`;

const Span = styled.span`
  margin-top: 10px;
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin-bottom: 10px;
`;

const DetailsContainer = styled.form`
  padding: 4px 4px 4px 4px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  text-align: center;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Select = styled.select`
  margin-top: 8px;
`;

type UserInAdmin = Pick<User, '_id' | 'email' | 'firstName' | 'name' | 'role'>;

function Admin(): JSX.Element {
  const initialState = {
    _id: '',
    email: '',
    firstName: '',
    name: '',
    role: ROLES.STUDENT,
  };
  const initialErrorState = {
    status: false,
    message: '',
  };

  const [filter, setFilter] = React.useState<ROLES | ''>('');
  const [showFilter, setShowFilter] = React.useState(false);
  const [errorState, setErrorState] = React.useState(initialErrorState);
  const [selectedUser, setSelectedUser] = React.useState<UserInAdmin>(initialState);
  const [users, setUsers] = React.useState<UserInAdmin[]>([]);
  const [toggledDetails, setToggleDetails] = React.useState<
    { id: string; isOpen: boolean }[]
  >([]);
  const { data } = useQuery<{ getUsers: UserInAdmin[] }>(GET_USERS);
  const [updateRoleMutation] = useMutation<
    { updateRole: UserInAdmin },
    { _id: string; role: string }
  >(UPDATE_ROLE);

  function onToggle(id: string) {
    if (id !== selectedUser._id) {
      setToggleDetails(users.map((user) => ({ id: user._id, isOpen: id === user._id })));

      setSelectedUser({
        ...(users.find((user) => user._id === id) || initialState),
      });
    } else {
      setSelectedUser(initialState);
      setToggleDetails(users.map((user) => ({ id: user._id, isOpen: false })));
    }
  }

  function onChange(value: ROLES) {
    setSelectedUser({ ...selectedUser, role: value });
  }

  React.useEffect(() => {
    if (data) {
      setToggleDetails(data.getUsers.map((user) => ({ id: user._id, isOpen: false })));
      setUsers([...data.getUsers]);
    }
  }, [data]);

  const initErrorState = () => {
    setErrorState(initialErrorState);
  };

  async function validate(e: React.SyntheticEvent) {
    e.preventDefault();
    if (selectedUser.role !== users.find((user) => user._id === selectedUser._id)?.role) {
      try {
        const result = await updateRoleMutation({
          variables: {
            _id: selectedUser._id,
            role: selectedUser.role,
          },
        });
        if (result?.data?.updateRole) {
          setToggleDetails(users.map((user) => ({ id: user._id, isOpen: false })));
          setSelectedUser(initialState);
          setUsers(
            users.map((userInState) =>
              userInState._id !== result?.data?.updateRole._id
                ? userInState
                : result?.data?.updateRole,
            ),
          );
        }
      } catch (err) {
        if (err instanceof ApolloError) {
          setErrorState({ message: err.message, status: true });
          setTimeout(initErrorState, 10000);
        }
      }
    }
  }

  return (
    <Container>
      <UsersContainer>
        <TitleContainer>
          <Title>Manage users</Title>
          <FilterContainer htmlFor="filter">
            <LabelContainer onClick={() => setShowFilter(!showFilter)} aria-hidden="true">
              <FilterIcon />
            </LabelContainer>
            {showFilter && (
              <Select
                id="filter"
                onChange={(e) => {
                  setFilter(e.target.value as ROLES | '');
                }}
                value={filter}>
                <option value={filter}>{filter?.toUpperCase() || 'ALL'}</option>
                {!!filter && <option value="">ALL</option>}
                {Object.entries(ROLES).map(
                  (role) =>
                    role[1] !== filter && (
                      <option key={role[1]} value={role[1]}>
                        {role[0]}
                      </option>
                    ),
                )}
              </Select>
            )}
          </FilterContainer>
        </TitleContainer>

        {users?.length > 0 &&
          users
            .filter((user) => (filter ? user.role === filter : user))
            .map((user) => (
              <Li key={user._id}>
                <UserDetails
                  id={user._id}
                  open={
                    toggledDetails.find((detail) => detail.id === user._id)?.isOpen ||
                    false
                  }>
                  <UserSummary>
                    {`${user.firstName.toUpperCase()} ${user.name.toUpperCase()}`}
                    <Span>{user.role}</Span>
                    <Button type="button" onClick={() => onToggle(user._id)}>
                      Change role
                    </Button>
                  </UserSummary>
                  <DetailsContainer onSubmit={(e) => validate(e)}>
                    <Label htmlFor="roles">
                      <span>Choose a role</span>
                      <Select
                        id="roles"
                        onChange={(e) => {
                          onChange(e.target.value as ROLES);
                        }}
                        value={selectedUser.role}>
                        <option value={selectedUser.role}>
                          {selectedUser.role.toUpperCase()}
                        </option>
                        {Object.entries(ROLES).map(
                          (role) =>
                            role[1] !== selectedUser.role && (
                              <option key={user._id + role[1]} value={role[1]}>
                                {role[0]}
                              </option>
                            ),
                        )}
                      </Select>
                    </Label>
                    <Button
                      type="submit"
                      disabled={
                        users.find((goodUser) => user._id === goodUser._id)?.role ===
                        selectedUser.role
                      }>
                      CONFIRM
                    </Button>
                  </DetailsContainer>
                </UserDetails>
              </Li>
            ))}
      </UsersContainer>
      {errorState.status && <ErrorMessage>{errorState.message}</ErrorMessage>}
    </Container>
  );
}

export default Admin;
