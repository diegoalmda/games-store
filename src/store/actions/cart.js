export function addItem(dispatch, game) {
  dispatch({type: 'addItem', payload: game});
}

export function removeItem(dispatch, game) {
  dispatch({type: 'removeItem', payload: game});
}