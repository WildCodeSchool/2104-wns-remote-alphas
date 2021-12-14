import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useUpdateTheme } from '../../context/ThemeUpdateContext';

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
        cursor: pointer;
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
    const updateTheme = useUpdateTheme();
    const defaultFont = theme.font.fontFamily.Oxygen;
    const defaultSize = theme.fontSize.xxs;
    const defaultWeight = theme.font.weight.normal;
    const [font, setFont] = useState(defaultFont);
    const [fontSize, setfontSize] = useState(defaultSize);
    const [fontWeight, setfontWeight] = useState(defaultWeight);

/*     useEffect(() => {
        updateTheme({
        //

        });
    }); */

   const changeFont = (event: any) => {
        setFont({ value: event.target.value });
    };

    const changeWeight = (event: any) => {
        setfontWeight({ value: event.target.value });
    };

    const handleSubmit = (event: any) => {
        alert(`votre font ${font.value}`);
        event.preventDefault();
    };

    const SmallSize = () => {
        setfontSize(defaultSize);
        return fontSize;
    };

    const MediumSize = () => {
        setfontSize(theme.fontSize.xs);
        return fontSize;
    };

    const LargeSize = () => {
        setfontSize(theme.fontSize.s);
        return fontSize;
    };

    return (
        <Wrapper>
            <FontFamilyContent>
                <WrapperFontSettings>
                    <img src="/assets/images/fontFamily.png" alt="illustration of font family" />
                    <p>Font</p>
                    <p>
                        font choose:
                        {font.value}
                    </p>
                </WrapperFontSettings>
                <Form onSubmit={handleSubmit}>
                    <select onChange={changeFont}>
                        <option value={defaultFont}>Oxygen</option>
                        <option value={theme.font.fontFamily.OpenDyslexic}>Open Dyslexic</option>
                    </select>
                    <p>
                        weight choose:
                        {fontWeight.value}
                    </p>
                    <select onChange={changeWeight}>
                        <option value={defaultWeight}>normal</option>
                        <option value={theme.font.weight.bold}>bold</option>
                    </select>
                    <button type="submit">Valider</button>
                </Form>
            </FontFamilyContent>

            <div>
                <WrapperFontSettings>
                    <img src="/assets/images/fontSize.png" alt="" />
                    <p>Font Settings</p>
                </WrapperFontSettings>
                <p>
                    choice of size:
                    {fontSize}
                </p>
                <FontChoice>
                    <SmallImg src="/assets/images/fontChoice.png" alt="" onClick={SmallSize} />
                    <MediumImg src="/assets/images/fontChoice.png" alt="" onClick={MediumSize} />
                    <LargeImg src="/assets/images/fontChoice.png" alt="" onClick={LargeSize} />
                </FontChoice>

            </div>

        </Wrapper>
    );
};

export default Texts;
