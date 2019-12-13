import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const INITIAL_STATE = {
  isSignedIn:null,
  userId:null
}

const authReducer = (currstate=INITIAL_STATE,action)=>{
  switch(action.type){
    case 'SIGN_IN':
      return {...currstate, isSignedIn:true, userId:action.payload};
    case 'SIGN_OUT':
      return {...currstate, isSignedIn:false, userId:null};
    default:
      return currstate;
  }
}

export default combineReducers({
  auth:authReducer,
  form:formReducer
});