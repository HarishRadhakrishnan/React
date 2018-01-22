import { combineReducers } from 'redux';

const initialState = {
  users: [],
	userInfo : {}
}

function todoApp1(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER' :
		return Object.assign({}, state, {
			users : state.users.concat(action.user)
      })
	  break;
	case 'EDIT_USER' :
		return Object.assign({}, state, {
		userInfo : action.user,
		index : action.index
	})
	break;
	case 'DELETE_USER' :
		console.log("deleting table",action);
		return Object.assign({}, state, {
		users: [
			...(state.users.filter(item => (item.id !== action.id))), 
		]});
    break;
	case "UPDATE_USER" :
		console.log("store state",state);
		return Object.assign({}, state,{
		users: state.users.map(item => {
				return item.id === action.user.id ? action.user : item;
		})
		})
  	break;
  default:
		return state
  }
}

const todoApp = combineReducers({
  todoApp1
})
export default todoApp;