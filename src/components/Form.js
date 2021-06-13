import { Button, TextField } from "@material-ui/core";
import './styles.css';

const Form = (props) => {
  return (
    <form>
      <TextField
        type='text'
        placeholder='都道府県名を入力してね'
        name="input"
        onChange={props.onChange}
        id="outlined-basic"
        variant="outlined"
        style={{width: '14em'}}
      />
      <Button
        type="button"
        onClick={props.getWeather}
        variant="contained"
        color="Primary"
        style={{marginLeft: '1em',marginTop: '0.5em'}}
        >検索
      </Button>
    </form>
  )
}

export default Form;
