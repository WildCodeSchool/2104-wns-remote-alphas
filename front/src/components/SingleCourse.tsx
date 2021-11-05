import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: solid blue 1px;
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

function SingleCourse(): JSX.Element {
	return (
        <Container>
            <div>
                <h3>Go back</h3>
            </div>
            <Course>
                <div>
                    <p>GraphQL Basics</p>
                    <p>15/11/2021</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/600x350" alt="" />
                    <blockquote cite="https://www.huxley.net/bnw/four.html">
                        <p>Lien vidéo - Thomas</p>
                    </blockquote>
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
            </Course>
        </Container>

	);
}

export default SingleCourse;
