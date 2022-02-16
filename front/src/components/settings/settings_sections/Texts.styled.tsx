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

const FontSettings = styled.div`
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

const SubmitButton = styled.div`
    width: 246px;
    margin: auto;
    button {
        width: 100%;
    }
`;

const Texts = (): JSX.Element => {
    const theme = useContext(ThemeContext);
    const updateTheme = useUpdateTheme();

    const [font, setFont] = useState(theme.font.fontName);
    const [fontSize, setfontSize] = useState(theme.fontSize.xxs);
    const [fontWeight, setfontWeight] = useState(theme.font.fontWeight);

/*     useEffect(() => {
        updateTheme({
        //

        });
    }); */

   const changeFont = (event: any) => {
       console.log('f,dk', event.target.value);
        setFont(event.target.value);
    };

    const changeWeight = (event: any) => {
        console.log('zzz', event.target.value);
        setfontWeight(event.target.value);
    };

    const handleSubmit = (event: any) => {
        // event.preventDefault();
        alert(`${font}${fontSize}${fontWeight}`);
    };

    const SmallSize = () => {
        setfontSize(theme.fontSize.xxs);
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

/*     useEffect(() => {

	}); */

    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <FontFamilyContent>
                    <WrapperFontSettings>
                        <img src="/assets/images/fontFamily.png" alt="illustration of font family" />
                        <p>Font</p>
                        <p>
                            font choose:
                            {font}
                        </p>
                    </WrapperFontSettings>
                        <FontSettings>
                        <select onChange={changeFont}>
                            <option value={theme.font.fontName} selected>Oxygen</option>
                            <option
                            value="Open Dyslexic">
                                Open Dyslexic
                            </option>
                        </select>
                        <p>
                            weight choose:
                            {fontWeight}
                        </p>
                        <select onChange={changeWeight}>
                            <option value={theme.font.fontWeight} selected>normal</option>
                            <option value="bold">bold</option>
                        </select>
                        </FontSettings>
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
                <SubmitButton>
                    <button type="submit">Valider</button>
                </SubmitButton>
            </form>
        </Wrapper>
    );
};

export default Texts;
