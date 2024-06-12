import './App.css';
import BackgroundImage from './Component/BackgroundImage';
import WeatherCard from './Component/WeatherCard';

function App() {
  return (
      <>
        <BackgroundImage>
          <WeatherCard />
        </BackgroundImage>
      </>
  );
}

export default App;
