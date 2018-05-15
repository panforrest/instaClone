import constants from '../constants'

var initialState = {
  user: { photo: []
  	// name: "testUser",
  	// id: "5af512b5c01f3c00143e9345"
  }
}

export default(state= initialState, action) => {  
  let newState = Object.assign({}, state)
  switch(action.type){
	case constants.USER_RECEIVED:
    const user = {
      id: action.data[0].user,
      photos: action.data
    }
	  newState.user = user
	  return newState;
	default: 
	  return state
	}
}