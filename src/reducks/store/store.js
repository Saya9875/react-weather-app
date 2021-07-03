import {
  createStore as reduxCreateStore, combineReducers
} from 'redux';
import { SearchReducer } from "../search/reducers";

export default function createStore() {
  return reduxCreateStore(
      combineReducers({
        search: SearchReducer
      })
  )
};
