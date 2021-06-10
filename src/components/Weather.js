import './styles.css';

const Weather = ({ prefecture, temperature, description, error }) => {
  return (
    <div>
      {prefecture && <p className="pre">{prefecture}</p>}
      {temperature && <p>{Math.round(temperature)} ℃</p>}
      {description && <p> {description}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}

export default Weather;
