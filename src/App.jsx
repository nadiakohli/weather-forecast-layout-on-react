import React from 'react';

// Icons
import Clouds from 'assets/icons/clouds.png';
import Barometer from 'assets/icons/barometer.png';
import ClearSky from 'assets/icons/clearSky.png';
import Freezing from 'assets/icons/freezing.png';
import Hot from 'assets/icons/hot.png';
import Humidity from 'assets/icons/humidity.png';
import MoonWithClouds from 'assets/icons/moonWithClouds.png';
import Rainbow from 'assets/icons/rainbow.png';
import Sun from 'assets/icons/sun.png';
import Sunrise from 'assets/icons/sunrise.png';
import Sunset from 'assets/icons/sunset.png';
import Windy from 'assets/icons/windy.png';

// Styles
import { 
  Wrapper, 
  Container, 
  ShortInfoWrap,
  InfoWrap,
  ImgWrap,
  CurrentTemperature,
  DayInfo,
  SearchForm,
  CurrentDayInfo,
  Icon,
  Input,
  Button,
  Header,
  InfoDetails,
  AdditionalsButton,
  CelsiusBtn,
  FahrenheitBtn,
  TranslateBtn,
  MainInfo,
  AdditionalInfo,
  MainInfoBtnWrap,
  MainInfoBlock,
  MainInfoBlocks,
  WeatherIcon,
  AdditionalBtnWrap,
  AdditionalInfoBlock,
  AdditionalInfoBlocks,
  White,
  Color,
  BtnTitle,
} from 'styled';

const App = () => {
  return (
    <Wrapper>
      <Container>
        <ShortInfoWrap>
          <DayInfo>
            <SearchForm>
              <Input type="search" placeholder='Type city here....'></Input>
              <Button>Search</Button>
            </SearchForm>
            <CurrentDayInfo>
              <h1>Thursday</h1>
              <div><i>"scattered clouds"</i></div>
            </CurrentDayInfo>
            <Icon src={Clouds} />
          </DayInfo>
        </ShortInfoWrap>
        <ImgWrap>
          <CurrentTemperature>
            <div>23°</div>
          </CurrentTemperature>
        </ImgWrap>
      </Container>
      <InfoWrap>
        <Header>
          <InfoDetails>
            <h1>My Cities (1/5)</h1>
            <AdditionalsButton>
              <CelsiusBtn>Celsius</CelsiusBtn>
              <FahrenheitBtn isInactive >Fahrenheit</FahrenheitBtn>
              <TranslateBtn>Translate</TranslateBtn>
            </AdditionalsButton>
          </InfoDetails>
        </Header>
        <MainInfo>
          <MainInfoBtnWrap>
            <BtnTitle>Timeline</BtnTitle>
            <BtnTitle isInactive >Week</BtnTitle>
          </MainInfoBtnWrap>
          <MainInfoBlocks>
            <MainInfoBlock>
              <WeatherIcon src={Clouds} />
              <h1>23°</h1>
              <h2>9:00</h2>
            </MainInfoBlock>
            <MainInfoBlock>
              <WeatherIcon src={ClearSky} />
              <h1>28°</h1>
              <h2>12:00</h2>
            </MainInfoBlock>
            <MainInfoBlock>
              <WeatherIcon src={Sun} />
              <h1>32°</h1>
              <h2>15:00</h2>
            </MainInfoBlock>
            <MainInfoBlock>
              <WeatherIcon src={Rainbow} />
              <h1>33°</h1>
              <h2>18:00</h2>
            </MainInfoBlock>
            <MainInfoBlock>
              <WeatherIcon src={MoonWithClouds} />
              <h1>30°</h1>
              <h2>21:00</h2>
            </MainInfoBlock>
          </MainInfoBlocks>
        </MainInfo>
        <AdditionalInfo>
          <AdditionalBtnWrap>
            <button>Today's highlights</button>
          </AdditionalBtnWrap>
          <AdditionalInfoBlocks>
            <AdditionalInfoBlock>
              <h1>Humidity</h1>
              <WeatherIcon src={Humidity} />
              <p>31%</p>
            </AdditionalInfoBlock>
            <AdditionalInfoBlock>
              <h1>Pressure</h1>
              <WeatherIcon src={Barometer} />
              <p>1020hPa</p>
            </AdditionalInfoBlock>
            <AdditionalInfoBlock direction="row">
              <White>
                <WeatherIcon src={Freezing} />
                <p>23°</p>
              </White>
              <Color>
                <WeatherIcon src={Hot} />
                <p>33°</p>
              </Color>
            </AdditionalInfoBlock>
          </AdditionalInfoBlocks>
          <AdditionalInfoBlocks>
            <AdditionalInfoBlock>
              <h1>Cloud Coverage</h1>
              <WeatherIcon src={Clouds} />
              <p>31%</p>
            </AdditionalInfoBlock>
            <AdditionalInfoBlock>
              <h1>Wind Speed</h1>
              <WeatherIcon src={Windy} />
              <p>2.56m/s</p>
            </AdditionalInfoBlock>
            <AdditionalInfoBlock direction="row">
              <White>
                <WeatherIcon src={Sunrise} />
                <p>6:58</p>
              </White>
              <Color>
                <WeatherIcon src={Sunset} />
                <p>21:43</p>
              </Color>
            </AdditionalInfoBlock>
          </AdditionalInfoBlocks>
        </AdditionalInfo>
      </InfoWrap>
    </Wrapper>
  );
}

export default App;
