import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  const [weather, setWeather] = useState([])
  const [prefecture, setPrefecture] = useState("東京都")
  const [error, setError] = useState("")

  const APIKEY = "79b604ecf442f7b5a1a0fad55d058a11"

  const onChange = function(e){
    setPrefecture(e.target.value)
  }

  async function fetchData() {
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${prefecture}&units=metric&lang=ja&APPID=${APIKEY}`)
      .then(res => res.json())
      .then(data => data)
      if (prefecture == apiData.name) {
        setWeather({
          data: apiData,
          prefecture: apiData.name,
          description: apiData.weather[0].description,
          temperature: apiData.main.temp
        })
        setError(false)
      }else {
        setWeather(false)
        setError({
          error: "都道府県名を入力してから検索ボタンを押してね"
        })
      }
    setPrefecture("")
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h3 className="h3">WEATHER APP</h3>
      <Form getWeather={fetchData} value={prefecture} onChange={onChange}/>
      <Weather
        prefecture={weather.prefecture}
        temperature={weather.temperature}
        description={weather.description}
        error={error.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
