import './styles.css';

const Weather = ({ pref, temperature, description, error }) => {
  return (
    <div>
      {pref && <p className="pre">{pref}</p>}
      {temperature && <p>{Math.round(temperature)} ℃</p>}
      {description && <p> {description}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Weather;
