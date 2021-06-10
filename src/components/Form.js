const Form = (props) => {
  console.log(props)
  return (
    <form>
      <input
        value={props.value}
        type='text'
        placeholder='都道府県名を入力してね'
        name='prefecture'
        onChange={props.onChange}
      />
      <button type={"button"} onClick={props.getWeather}>検索</button>
    </form>
  )
}

export default Form;
