/**static action */
import {SIGN_IN, SIGN_OUT} from './types';
export const testAction = ()=>{
  return{
    type:'TEST_ACTION',
    payload:'THIS IS A STATIC ACTION'
  }
}

export const signIn = (userId)=>{
  return{
    type:SIGN_IN,
    payload: userId
  }
}

export const signOut = ()=>{
  return{
    type:SIGN_OUT
  }
}