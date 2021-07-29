import reducer from './reducers';
import { removeItem, addItem } from './actions/cart';

const initialState = [];

export {
  initialState,
  reducer,
  addItem,
  removeItem,
}