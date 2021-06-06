const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        type='text'
        placeholder='都道府県名を入力してね'
        name='prefecture'
      />
      <button>検索</button>
    </form>
  )
}

export default Form;
