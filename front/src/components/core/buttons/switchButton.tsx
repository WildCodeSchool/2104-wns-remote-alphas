import styled from 'styled-components';

/**
 * Switch button for toggle values
 */
interface SwitchProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox = styled.input``;

const Container = styled.div`
  :focus-within {
    box-shadow: 0 0 10px 5px ${(props) => props.theme.colors.secondary};
  }
`;

const SwitchButton = ({ checked, setChecked }: SwitchProps): JSX.Element => (
  <Container className="button r" id="switch-btn">
    <Checkbox
      aria-label="checkbox"
      tabIndex={0}
      type="checkbox"
      className="checkbox"
      checked={checked}
      onClick={() => {
        setChecked(!checked);
      }}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          console.log('enter pressed');
          setChecked(!checked);
        }
      }}
    />
    <div className="knobs" />
    <div className="layer" />
  </Container>
);

export default SwitchButton;
