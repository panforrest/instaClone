import constants from '../constants'

var initialState = {}

export default(state= initialState, action) => {  
  // let updated = Object.assign({}, state)
  switch(action.type){
	case constants.USER_RECEIVED:
	  console.log(action);
	  return state;
	default: 
	  return state
	}
}