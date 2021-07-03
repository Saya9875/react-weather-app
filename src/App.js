import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { updatePrefecture, fetchData } from './redux/actions/actions';

function App() {
  const weather = useSelector(state => state.search)
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(updatePrefecture(e.target.value))
    e.preventDefault()
  }
  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className="App">
      <h3 className="h3">WEATHER APP</h3>
      <Form getWeather={() => {dispatch(fetchData())}}  onChange={onChange} />
      <Weather
        pref={weather.pref}
        temperature={weather.temperature}
        description={weather.description}
        error={weather.error}
      />
      {console.log(weather.data)}
      {console.log(weather.pref)}
    </div>
  );
}

export default App;
