import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { updatePrefecture, updateWeather, updateError } from './reducks/search/actions';
import { APIKEY } from './constant';

function App() {
  //const prefecture = useSelector(state => state.search.prefecture)
  const weather = useSelector(state => state.search)
  //const error = useSelector(state => state.search.error)
  const { prefecture, error } = useSelector(state => state.search)

  const dispatch = useDispatch()

  // const onChange = (e) => {
  //   dispatch(updatePrefecture({
  //     prefecture: e.target.value
  //   }))
  //   e.preventDefault()
  // }

  const onChange = (e) => {
    dispatch(updatePrefecture(e.target.value))
    e.preventDefault()
  }

  const fetchData = async () => {
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${prefecture}&units=metric&lang=ja&APPID=${APIKEY}`)
      .then(res => res.json())
      .then(data => data)
    if (prefecture === apiData.name) {
      dispatch(updateWeather({
        data: apiData,
        pref: apiData.name,
        description: apiData.weather[0].description,
        temperature: apiData.main.temp
      }))
      dispatch(updateError({
        error: ""
      }))
    } else {
      dispatch(updateWeather({}))
      dispatch(updateError({
        error: "都道府県名を入力してから検索ボタンを押してね"
      }))
    }
    //console.log(prefecture)
    //console.log(apiData.name)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h3 className="h3">WEATHER APP</h3>
      <Form getWeather={fetchData} onChange={onChange} />
      <Weather
        pref={weather.pref}
        temperature={weather.temperature}
        description={weather.description}
        error={error.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
