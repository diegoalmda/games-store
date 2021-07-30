import reducer from './reducers';
import { removeItem, addItem, removeAll } from './actions/cart';

const initialState = [];

export {
  initialState,
  reducer,
  addItem,
  removeItem,
  removeAll,
}