import styled, { css } from 'styled-components';

// Images
import BackgroundImg from 'assets/images/florian.jpg';

const complexMixin = css`
  ${({ isInactive }) => {
    if (isInactive) return css`opacity: 65%;`  
  }};
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to bottom right, #bd6fa6, #fce5ad);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 600px; 
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 700px;
  height: 600px;
  background-color: #f3f3f3;
  border-radius: 0 15px 15px 0;
`;

export const ShortInfoWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #514c4e;
  border-radius: 15px 0 0 0; 
`;

export const ImgWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 60%;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-size: cover;
  border-radius: 0 0 0 15px;
`;

export const CurrentTemperature = styled.div`
  position: absolute;
  top: -49px;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background-image: linear-gradient(to bottom right, #bd6fa6, #fce5ad);
  border-radius: 50%;
  border: 1px solid #fff;

  & div {
    font-size: 31px;
    color: #fff;
    font-weight: bold;
  }
`;

export const DayInfo = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 70%;
`;

export const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const CurrentDayInfo = styled.div`
  & h1 {
    color: #fff;
    font-size: 28px;
  }

  & div, i {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 13px;
    opacity: 75%;
  }
`;

export const Icon = styled.img`
  width: 100px;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 80%;
  border: none;
  padding: 4px 8px;
  border-radius: 10px 0 0 0;

  &:focus,
  &:active {
    outline: none;
  }

  &:disabled {
    background-color: #fff;
  }

  &::placeholder {
    font-size: 10px;

  }
`;

export const Button = styled.button`
  padding: 6px 5px;
  font-size: 12px;
  color: #fff;
  background-image: linear-gradient(to bottom right, #bd6fa6, #fce5ad);
  font-weight: bold;
  border: none;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const InfoDetails = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #c3c3c3;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & h1 {
    display: flex;
    align-items: center;
    font-size: 13px;
  }
`;
export const AdditionalsButton = styled.div`
  & button {
    margin: 0 10px;
  }
`;

export const CelsiusBtn = styled.button`
  margin: 0 10px;
  font-size: 13px;
  background: none;
  border: none;
`;

export const FahrenheitBtn = styled.button`
  margin: 0 10px;
  font-size: 13px;
  background: none;
  border: none;

  ${complexMixin};
`;

export const TranslateBtn = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
  background-image: linear-gradient(to bottom right, #bd6fa6, #fce5ad);
  color: #fff;
  border: none;
`;


export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInfoBtnWrap = styled.div`
  margin: 10px 0;
  display: flex;
  align-self: start;
`;

export const BtnTitle = styled.button`
  border: none;
  padding: 0 5px;
  font-size: 21px;
  background: -webkit-linear-gradient(#bd6fa6, #fce5ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${complexMixin};
`;

export const MainInfoBlocks = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-self: center;
`;

export const MainInfoBlock = styled.div`
  margin: 10px 0;
  background-color: #fff;
  width: 120px;
  height: 125px;
  border-radius: 8px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 16px;
  }

  & h2 {
    font-size: 12px;
  }
`;

export const WeatherIcon = styled.img`
  width: 45px;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AdditionalBtnWrap = styled.div`
  align-self: flex-start;

  & button {
    border: none;
    padding: 0 5px;
    font-size: 21px;
    background: -webkit-linear-gradient(#bd6fa6, #fce5ad);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
  }
`;

export const AdditionalInfoBlocks = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-self: center;
`;

export const AdditionalInfoBlock = styled.div`
  width: 100%;
  margin: 10px 0;
  background-color: #fff;
  width: 200px;
  height: 130px;
  border-radius: 8px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-direction: ${({ direction }) => direction ? 'row' : 'column'};
  justify-content: space-evenly;
  align-items: center;

  & h1 {
    font-size: 18px;
  }

  & p {
    font-size: 15px;
  }
`;

export const White = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;
  width: 50%;
  height: 100%;
  background-color: #fff;
`;

export const Color = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 0 8px 8px 0;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(to bottom right, #bd6fa6, #fce5ad);
`;
