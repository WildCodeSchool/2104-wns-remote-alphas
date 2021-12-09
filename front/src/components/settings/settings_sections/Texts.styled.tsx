import React from 'react';
import styled from 'styled-components';

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
    console.log('texts and fonts section');
    return (
        <Wrapper>
            <FontFamilyContent>
                <WrapperFontSettings>
                    <img src="/assets/images/fontFamily.png" alt="illustration of font family" />
                    <p>Font</p>
                </WrapperFontSettings>
                <Form>
                    <select>
                        <option>Oxygen</option>
                    </select>
                    <select>
                        <option>weight</option>
                    </select>
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
