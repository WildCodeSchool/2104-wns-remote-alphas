import styled from 'styled-components';

import convertDate from '../../../utils/convertDate';
import { CourseType } from '../../../utils/types';
import Button from '../../core/buttons/Button.styled';

export type CourseId = {
  _id: string;
};

interface Iprops {
  courses: CourseType[];
  fetchById(_id: string): void;
  displayModal(item: CourseType): void;
}

const ContentColumn = styled.tr`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-start;
`;

const Tbody = styled.tbody`
  border-radius: ${(props) => props.theme.fixedSize.borderRadius};
  display: flex;
  justify-content: space-between;
  /* alignitems: center; */
  width: 90%;
  background-color: #1c1c1c;
  margin: auto;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

function OfficeCoursesList({ courses, fetchById, displayModal }: Iprops): JSX.Element {
  return (
    <table style={{ width: '100%' }}>
      {courses
        .sort((a, b) => (b.postedAt > a.postedAt ? 1 : -1))
        .map((item) => (
          <Tbody key={item._id}>
            <ContentColumn>
              <th>
                <h3 style={{ color: 'white' }}>{item.courseName}</h3>
              </th>
              <td>
                <h4 style={{ color: 'orange' }}>
                  {item.technos[0]}
                  {item.technos.length > 1 && (
                    <span>
                      &nbsp; | &nbsp;
                      {item.technos[1]}
                    </span>
                  )}
                </h4>
              </td>
              <br />
              <td style={{ color: 'white' }}>
                <p style={{ fontStyle: 'italic', fontSize: '.85em' }}>
                  {item.postedAt ? convertDate(item.postedAt, 'fr') : undefined}
                </p>
              </td>
            </ContentColumn>

            <tr style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <td>
                <Button
                  type="button"
                  alert
                  onClick={(e) => {
                    e.preventDefault();
                    displayModal(item);
                  }}>
                  Delete
                </Button>
              </td>
              <td>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    fetchById(item._id);
                  }}>
                  Edit
                </Button>
              </td>
            </tr>
          </Tbody>
        ))}
    </table>
  );
}

export default OfficeCoursesList;
