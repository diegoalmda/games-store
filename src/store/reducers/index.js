export default function reducer(state, action) {
  let included = false;
  let newState = null;

  switch(action.type) {

    case 'addItem':
      included = false;
      state.forEach(element => {
        if(element.id === action.payload.id) {
            included = true;
        }
      });

      if(included) {
        newState = state.map((item) => {
          if(item.id === action.payload.id) {
            item.qt++;
          } 
          return item;
        })
        
        return [...newState];
      } else {
        newState = {
          ...action.payload,
          qt: 1,
        }
        return [...state, newState];
      }   

    case 'removeItem':
      
      state.forEach((item) => {
        if(item.id === action.payload.id && item.qt > 1) {
          item.qt--;
          return;
        } else {
          if(item.id === action.payload.id){
            state = state.filter((item) => {
              return item.id !== action.payload.id;
            })
          }          
          return;
        }
      })
      
      return [...state];

    default: 
      return state;
  }
}  