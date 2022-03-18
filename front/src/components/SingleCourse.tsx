import { useQuery } from '@apollo/client';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { GET_ONE_COURSE } from '../utils/apollo';
import { CourseType } from '../utils/types';
import ScrollToTop from './core/ScrollToTop';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 141px;
  @media screen and (max-width: 780px) {
    padding: 3%;
  }
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 125px;
  align-self: flex-start;
  margin: 0 0 2% 12%;
  cursor: pointer;
  @media screen and (max-width: 780px) {
    margin: 0;
    margin-bottom: 2%;
  }
`;

const ArrowContent = styled.div`
  width: 32px;
`;

const Arrow = styled.img`
  width: 100%;
`;

const ButtonText = styled.p``;

const Course = styled.div`
  min-height: 850px;
  width: 650px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.colors.opposite};
  padding: 65px 121px 65px 121px;
  box-shadow: 10px 12px 16px -3px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 780px) {
    width: 90%;
    min-height: 40%;
    padding: 5%;
    margin-bottom: 80px;
  }
`;

const TextOnHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 31px;
`;

const TitleCourse = styled.div`
  font-size: 48px;
`;

const PostedDate = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
  font-weight: bold;
`;

const ContentVideo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LinkOfVideo = styled.p`
  color: ${(props) => props.theme.colors.tertiary};
`;

const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 19px;
`;

const LinkReference = styled.td`
  color: ${(props) => props.theme.colors.tertiary};
`;

const NinjaPanda = styled.div`
  width: 170px;
  float: right;
`;
const PandaImage = styled.img`
  width: 100%;
`;

function SingleCourse(): JSX.Element {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<{ getCourseById: CourseType }>(
    GET_ONE_COURSE,
    {
      variables: { _id: id },
    },
  );
  function formattedDate(date: string) {
    const parsedDate = Date.parse(date);
    const localeDate = new Date(parsedDate).toLocaleDateString('fr-FR');
    return localeDate;
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Container>
      <BackButton type="button" onClick={() => history.goBack()}>
        <ArrowContent>
          <Arrow
            src="/assets/icons/018-arrowhead-pointing-to-the-right-1.svg"
            alt="arrow icon"
          />
        </ArrowContent>
        <ButtonText>Go back</ButtonText>
      </BackButton>
      <Course>
        <TextOnHead>
          <TitleCourse>{data?.getCourseById.courseName}</TitleCourse>
          {data?.getCourseById && (
            <PostedDate>{formattedDate(data.getCourseById.postedAt)}</PostedDate>
          )}
        </TextOnHead>
        <ContentVideo>
          <img src={data?.getCourseById.image_url} alt="" />
          <LinkOfVideo>Lien vidéo - Thomas</LinkOfVideo>
        </ContentVideo>
        <section>
          <h4>fknjdbjkcbdkbchbdc</h4>
          <p>
            dhbhdbhcbhdbchbdhcbhdbhcbdhsc cnbjdnjcnbdjcnbjdbcbdcbjhdbcjbd
            dcnjdsbncjbdhbchdbchbdhbchdbchbdh cbhdbcjhdbcjhbdhbchdbchbdhbchdbch
            dncjdnbjcbdjbchdbhcbhdbhcbdhchbdhc dcbdhbchd.
          </p>
        </section>
        <ContentImg>
          <img src="https://via.placeholder.com/300x150" alt="" />
        </ContentImg>
        <section>
          <h4>fknjdbjkcbdkbchbdc</h4>
          <p>
            dhbhdbhcbhdbchbdhcbhdbhcbdhsc cnbjdnjcnbdjcnbjdbcbdcbjhdbcjbd
            dcnjdsbncjbdhbchdbchbdhbchdbchbdh cbhdbcjhdbcjhbdhbchdbchbdhbchdbch
            dncjdnbjcbdjbchdbhcbhdbhcbdhchbdhc dcbdhbchd.
          </p>
        </section>
        <div>
          <h3>Going further...</h3>
          <table>
            <tbody>
              <tr>
                <LinkReference>Reference Link</LinkReference>
                <LinkReference>Reference Link</LinkReference>
              </tr>
              <tr>
                <LinkReference>Reference Link</LinkReference>
                <LinkReference>Reference Link</LinkReference>
                <LinkReference>Reference Link</LinkReference>
              </tr>
            </tbody>
          </table>
        </div>
        <NinjaPanda>
          <PandaImage
            src="/assets/images/ninja-goodJob.png"
            alt="ninja panda says good job"
          />
        </NinjaPanda>
      </Course>
      <ScrollToTop />
    </Container>
  );
}

export default SingleCourse;
