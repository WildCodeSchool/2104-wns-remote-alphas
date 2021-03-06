import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { GET_COURSES } from '../utils/apollo';
import { CourseType } from '../utils/types';
import TextButton from './core/buttons/TextButton.styled';
import Error from './core/Error.styled';
import Row from './core/layout_parts/Row.styled';
import Loader from './core/Loader.styled';
import CardCoursesSecondary from './timeline/CardCoursesSecondary';
// import CourseIcon from './assets/icons/CourseIcon';

/**
 * Homepage view, displayed when a user is connected
 */

const Title = styled.h1`
  color: ${(props) => props.theme.colors.opposite};
  font-size: ${(props) => props.theme.fontSize.l};
  margin-top: 0.5em;
  margin-bottom: 1em;
  margin-left: 3em;
  width: 80%;
  display: none;
  @media screen and (min-width: 780px) {
    display: block;
  }
`;

const Content = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  margin-top: 2em;
  @media all and (min-width: 1000px) {
    margin-top: unset;
    article:nth-child(2) {
      width: 30%;
      height: 100%;
      img {
        width: 72%;
      }
      h2 {
        font-size: 40px;
      }
    }
  }
`;

const Column = styled.main<{ alignItems?: string; gap?: number }>`
    display: flex;
    flex-direction: column;
	width: 100%;
	height: calc(100vh - 113px - 105px);
    margin: 0;
    gap: ${(props) => props.gap} ? ${(props) => props.gap} : ${({ theme }) =>
  theme.margin.generic.small};
    align-items: ${(props) => props.alignItems} ? ${(props) => props.alignItems} : '';
	.heading {
		display: none;
	}
	@media all and (min-width: 1100px) {
		.heading {
			display: flex;
			width: 100%;
		}
	}
`;

const ResponsiveBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  margin-top: 1em;
`;

function Home(): JSX.Element {
  const { loading, error, data } = useQuery<{ getCourses: CourseType[] }>(GET_COURSES);

  const history = useHistory();

  return (
    <Column id="main-content">
      {loading && <Loader />}
      {error && <Error />}
      {data?.getCourses && (
        <ResponsiveBox>
          <Row className="heading">
            <Title>Last Courses...</Title>
            <TextButton
              style={{ marginRight: '1em', width: '20%' }}
              accent
              onClick={() => history.push('/courses')}>
              View timeline &nbsp;
              {'=>'}
            </TextButton>
          </Row>
          <Content>
            {data.getCourses.slice(-3).map((course) => (
              <CardCoursesSecondary
                key={course._id}
                id={course._id}
                title={course.courseName}
                image={course.image_url}
                imageDescription="image video"
                techno1={course.technos[0]}
                techno2={course.technos[1]}
              />
            ))}
          </Content>
        </ResponsiveBox>
      )}
    </Column>
  );
}

export default Home;
