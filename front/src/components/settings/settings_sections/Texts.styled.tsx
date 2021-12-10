import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { setFlagsFromString } from 'v8';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 555px;
`;

const FontFamilyContent = styled.div`
    margin-bottom: 62px;
`;

const WrapperFontSettings = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 34px;
    img {
        width: 64px;
        height: 64px;
        margin-right: 26px;
    }
`;
const FontChoice = styled.div`
    display: flex;
    justify-content: space-around;
    img {
        align-self: self-end;
    }
`;

const Form = styled.form`
    display: flex;
    justify-content: space-around;

`;
const SmallImg = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 45px;
`;

const MediumImg = styled.img`
    width: 48px;
    height: 48px;
    margin-right: 45px;
`;

const LargeImg = styled.img`
    width: 64px;
    height: 64px;
`;

const Texts = (): JSX.Element => {
    const theme = useContext(ThemeContext);
    const defaultFont = theme.font.fontFamily.Oxygen;
    const [font, setFont] = useState(defaultFont);

    const handleChange = (event: any) => {
        setFont({ value: event.target.value });
    };

    const handleSubmit = (event: any) => {
        alert(`votre font ${font.value}`);
        event.preventDefault();
    };

    return (
        <Wrapper>
            <FontFamilyContent>
                <WrapperFontSettings>
                    <img src="/assets/images/fontFamily.png" alt="illustration of font family" />
                    <p>Font</p>
                </WrapperFontSettings>
                <Form onSubmit={handleSubmit}>
                    <select onChange={handleChange}>
                        <option selected value="oxygen">Oxygen</option>
                        <option value="open-dyslexic">Open Dyslexic</option>
                    </select>
                    <select>
                        <option>weight</option>
                    </select>
                    <button type="submit">Valider</button>
                </Form>
            </FontFamilyContent>

            <div>
                <WrapperFontSettings>
                    <img src="/assets/images/fontSize.png" alt="" />
                    <p>Font Settings</p>
                </WrapperFontSettings>
                <FontChoice>
                    <SmallImg src="/assets/images/fontChoice.png" alt="" />
                    <MediumImg src="/assets/images/fontChoice.png" alt="" />
                    <LargeImg src="/assets/images/fontChoice.png" alt="" />
                </FontChoice>

            </div>

        </Wrapper>
    );
};

export default Texts;
