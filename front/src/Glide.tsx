import React, { useRef } from 'react';
import { useQuery, gql } from '@apollo/client';
import Glide from 'react-glidejs';
import styled from 'styled-components';
import CardCourses from './components/CardCourses';

// eslint-disable-next-line import/no-unresolved
import 'react-glidejs/dist/index.css';

interface GlideProps {
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  dots?: boolean;
  height?: number;
  infinite?: boolean;
  width: number;
  rewind?: boolean;
  keyboard?: boolean;
  gap: number;
  onSlideChange?: () => void;
}

export type CourseType = {
	courseName: string;
	description: string;
	technos: string[];
	image_url: string;
};

export const GET_COURSES_QUERY = gql`
	query {
		getCourses {
			description
			technos
			courseName
			image_url
		}
	}
`;

const ContainerSlider = styled.div`
  margin: 50px 14px;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => {
  const gliderRef = useRef(null);
  const { loading, error, data } = useQuery(GET_COURSES_QUERY);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
  return (
    <ContainerSlider
      className="slide-slide"
    >
      <Glide
        ref={gliderRef}
        type="carousel"
        customSlideAnimation={{
          timeout: 500,
          classNames: 'fade',
        }}
        perView={3}
        startAt={0}
        slideClassName="slider__frame"
        keyboard
        rewind
        gap={50}
      >
        {data.getCourses.map((course: CourseType) => (
        <CardCourses
          title={course.courseName}
          image={course.image_url}
          imageDescription="image video"
          course={course.technos[0]}
        />
        ))}
      </Glide>
    </ContainerSlider>
  );
};
