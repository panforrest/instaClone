import constants from '../constants'

var initialState = {
  user: {
  	// name: "testUser",
  	// id: "5af512b5c01f3c00143e9345"
  }
}

export default(state= initialState, action) => {  
  let newState = Object.assign({}, state)
  switch(action.type){
	case constants.USER_RECEIVED:
	  newState.user = action.data
	  return newState;
	default: 
	  return state
	}
}