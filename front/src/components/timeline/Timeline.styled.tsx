import { useQuery } from '@apollo/client';
import { Chrono } from 'react-chrono';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { GET_COURSES } from '../../utils/apollo';
import convertDate from '../../utils/convertDate';
import { CourseType } from '../../utils/types';
import Button from '../core/buttons/Button.styled';
import Error from '../core/Error.styled';
import Loader from '../core/Loader.styled';

const TimelineContent = styled.main`
  width: 100%;
  height: calc(100vh - 113px - 105px);
  background-color: ${(props) => props.theme.colors.primary};
`;

function Timeline(): JSX.Element {
  const { loading, error, data } = useQuery(GET_COURSES);
  const history = useHistory();

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <TimelineContent data-testid="timeline" id="main-content">
      <Chrono
        items={data.getCourses.map((course: CourseType, index: number) => ({
          key: index,
          title: course.postedAt
            ? convertDate(course.postedAt, 'En')
            : 'No date available',
          cardTitle: course.courseName,
          cardDetailedText: course.description,
          media: {
            source: {
              url: course.image_url,
            },
            type: 'IMAGE',
            name: 'course image',
          },
        }))}
        mode="HORIZONTAL"
        itemWidth={300}
        theme={{
          primary: '#68d0fc',
          secondary: 'white',
          cardBgColor: 'white',
          cardForeColor: 'white',
        }}>
        {data.getCourses.map((course: CourseType) => (
          <Button
            type="button"
            key={course._id}
            onClick={() => {
              history.push(`/courses/${course._id}`);
            }}>
            See the course
          </Button>
        ))}
      </Chrono>
    </TimelineContent>
  );
}

export default Timeline;
