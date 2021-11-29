import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 141px;

`;

const Course = styled.div`
    min-height: 850px;
    width: 650px;
    border-radius: 30px;
    background-color: #ECEFF1;
    padding: 65px 121px 65px 121px;
    border: solid red 1px;
`;

const TextOnHead = styled.div`
    display: flex;
    justify-content: space-between;
`;

const linkOfVideo = styled.p`
    color: #FE7F2D;
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
	return (
        <Container>
            <div>
                <button type="button" onClick={() => history.goBack()}>Go back</button>
            </div>
            <Course>
                <TextOnHead>
                    <p>GraphQL Basics</p>
                    <p>15/11/2021</p>
                </TextOnHead>
                <div>
                    <img src="https://via.placeholder.com/600x350" alt="" />
                    <p>Lien vidéo - Thomas</p>
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
                            <td>Reference Link</td>
                            <td>Reference Link</td>
                        </tr>
                        <tr>
                            <td>Reference Link</td>
                            <td>Reference Link</td>
                            <td>Reference Link</td>
                        </tr>
                    </table>
                </div>
                <NinjaPanda>
                    <PandaImage src="/assets/images/ninja-goodJob.png" alt="ninja panda says good job" />
                </NinjaPanda>
            </Course>
        </Container>

	);
}

export default SingleCourse;
