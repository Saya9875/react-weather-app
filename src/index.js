import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import './index.css'
import App from './App'

//export const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
