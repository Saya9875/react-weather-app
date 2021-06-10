import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  const [weather, setWeather] = useState([])
  const [data, setData] = useState("Tokyo")

  const APIKEY = "79b604ecf442f7b5a1a0fad55d058a11"
  const onChange = function(e){
    setData(e.target.value)
  }

  async function fetchData() {
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&lang=ja&APPID=${APIKEY}`)
      .then(res => res.json())
      .then(data => data)
    if (data) {
      setWeather({
        data: apiData,
        prefecture: apiData.name,
        description: apiData.weather[0].description,
        temperature: apiData.main.temp,
        error: ""
      }
      )
    } else {
      setWeather({
        data: '',
        prefecture: '',
        description: '',
        temperature: '',
        error: "都道府県名を入力してから検索ボタンを押してね"
      }
      )
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h3 className="h3">WEATHER APP</h3>
      <Form getWeather={fetchData} value={data} onChange={onChange}/>
      <Weather
        prefecture={weather.prefecture}
        temperature={weather.temperature}
        description={weather.description}
        error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
