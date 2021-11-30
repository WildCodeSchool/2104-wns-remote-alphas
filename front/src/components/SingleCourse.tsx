import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';
import ScrollToTop from './ScrollToTop';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 141px;
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
`;

const ArrowContent = styled.div`
    width: 32px;
`;

const Arrow = styled.img`
    width: 100%;
`;

const ButtonText = styled.p`
`;

const Course = styled.div`
    min-height: 850px;
    width: 650px;
    border-radius: 30px;
    background-color: #ECEFF1;
    padding: 65px 121px 65px 121px;
    box-shadow: 10px 12px 16px -3px rgba(0,0,0,0.75);
`;

const TextOnHead = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LinkOfVideo = styled.p`
    color: #FE7F2D;
`;
const LinkReference = styled.td`
    color: #FE7F2D;
`;

const NinjaPanda = styled.div`
    width: 170px;
    float: right;
`;
const PandaImage = styled.img`
    width: 100%;
`;

export const GET_COURSES_BY_ID_QUERY = gql`
	query {
		getCourseById {
			_id
			description
			technos
			courseName
			image_url
		}
	}
`;

function SingleCourse(): JSX.Element {
    const history = useHistory();
    const { loading, error, data } = useQuery(GET_COURSES_BY_ID_QUERY);

	return (
        <Container>
{/*              {data.getCourseById.map((course: any) => (
                // eslint-disable-next-line no-underscore-dangle
                <p key={course._id}>{course.name}</p>
            ))} */}
                <BackButton type="button" onClick={() => history.goBack()}>
                    <ArrowContent>
                        <Arrow src="/assets/icons/018-arrowhead-pointing-to-the-right-1.svg" alt="arrow icon" />
                    </ArrowContent>
                    <ButtonText>Go back</ButtonText>
                </BackButton>
            <Course>
                <TextOnHead>
                    <p>GraphQL Basics</p>
                    <p>15/11/2021</p>
                </TextOnHead>
                <div>
                    <img src="https://via.placeholder.com/600x350" alt="" />
                    <LinkOfVideo>Lien vidéo - Thomas</LinkOfVideo>
                </div>
                <section>
                    <h4>fknjdbjkcbdkbchbdc</h4>
                    <p>
                        dhbhdbhcbhdbchbdhcbhdbhcbdhsc
                        cnbjdnjcnbdjcnbjdbcbdcbjhdbcjbd
                        dcnjdsbncjbdhbchdbchbdhbchdbchbdh
                        cbhdbcjhdbcjhbdhbchdbchbdhbchdbch
                        dncjdnbjcbdjbchdbhcbhdbhcbdhchbdhc
                        dcbdhbchd.
                    </p>
                </section>
                <img src="https://via.placeholder.com/300x150" alt="" />
                <section>
                    <h4>fknjdbjkcbdkbchbdc</h4>
                    <p>
                        dhbhdbhcbhdbchbdhcbhdbhcbdhsc
                        cnbjdnjcnbdjcnbjdbcbdcbjhdbcjbd
                        dcnjdsbncjbdhbchdbchbdhbchdbchbdh
                        cbhdbcjhdbcjhbdhbchdbchbdhbchdbch
                        dncjdnbjcbdjbchdbhcbhdbhcbdhchbdhc
                        dcbdhbchd.
                    </p>
                </section>
                <div>
                    <h3>Going further...</h3>
                    <table>
                        <tr>
                            <LinkReference>Reference Link</LinkReference>
                            <LinkReference>Reference Link</LinkReference>
                        </tr>
                        <tr>
                            <LinkReference>Reference Link</LinkReference>
                            <LinkReference>Reference Link</LinkReference>
                            <LinkReference>Reference Link</LinkReference>
                        </tr>
                    </table>
                </div>
                <NinjaPanda>
                    <PandaImage src="/assets/images/ninja-goodJob.png" alt="ninja panda says good job" />
                </NinjaPanda>
            </Course>
            <ScrollToTop />
        </Container>

	);
}

export default SingleCourse;
