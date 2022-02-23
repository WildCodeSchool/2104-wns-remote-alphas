import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import CTAButton from './core/buttons/CTAButton.styled';
import GradientBackground from './core/GradientBackground.styled';
import GradientTitle from './core/GradientTitle.styled';

/**
 * Default home page shown to the unknown visitors with call to actions (log in and sign in).
 */

const BoxCard = styled.main`
  background: #292929;
  padding: 3em;
  border-radius: 30px;
  width: 60%;
  max-height: 80%;
  margin: auto;
  /* alignitems: stretch; */
  text,
  br {
    display: none;
  }
  @media all and (max-width: 515px) {
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 18px;
    }
  }
  @media all and (min-width: 580px) {
    text,
    br {
      display: block;
    }
  }
  @media all and (min-width: 1000px) {
    width: 33%;
  }
`;

const Container = styled.div`
  margin: ${(props) => props.theme.margin.imageCard};
  margin-top: 50px;
  width: 200px;
  margin: auto;
`;

const Image = styled.img`
  width: 200px;
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  @media all and (min-width: 580px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Text = styled.text`
  color: white;
  text-align: center;
  align-content: center;
`;

function LandingPage(): JSX.Element {
  const history = useHistory();

  return (
    <GradientBackground>
      <BoxCard>
        <Container>
          <Image src="/assets/images/133725.png" aria-hidden alt="panda" />
        </Container>
        <GradientTitle>Masterize</GradientTitle>
        <h2 style={{ color: 'white', textAlign: 'center' }}>
          The inclusive learning platform for remote classes.
        </h2>
        <Text>
          Ensuring equal access to education and training is essential. This is why we
          have built Masterize, a digitally accessible platform for all users, including
          those with disabilities, that makes remote learning easier and more comfortable
          for everyone.
        </Text>
        <br />
        <br />
        <Text>
          We ensure that our learning platform is fully accessible to evey user,
          regardless of their disabilities. Being compliant to the highest grade of
          accessibility in the WCAG makes the app compatible with common accessibility
          tools.
        </Text>
        <br />
        <br />
        <ButtonsRow>
          <CTAButton
            type="button"
            onClick={() => {
              history.push('/signup');
            }}>
            Sign up
          </CTAButton>
          <CTAButton
            type="button"
            onClick={() => {
              history.push('/signin');
            }}>
            Log in
          </CTAButton>
        </ButtonsRow>
      </BoxCard>
    </GradientBackground>
  );
}

export default LandingPage;
