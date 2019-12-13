import React from 'react';
import Loader from 'react-loader-spinner';
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isSignedIn:'null',
    }
  }
  componentDidMount(){
    // this is to initialize the lib
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId: '367925348292-d5p3sv4sl1goedts9ioav9v3lvq2629u.apps.googleusercontent.com',
        scope:'email'
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    })
  }

	renderSignInButton(){
		return(
			<div>
				<button 
        onClick={this.onSignInClick}
        style={styles.signIn}
        >Google - <small>Sign-In</small></button>
			</div>
		)
	}
	renderHeader(){
		return(
			<div>
				<button 
        	onClick={this.onSignOutClick}
        	style={styles.signOut}
        	>Sign Out</button>
			</div>
		)
	}
	renderSignOutButton(){
		return(
			<div>
				<button 
        onClick={this.onSignOutClick}
        style={styles.signOut}
        >Sign Out</button>
			</div>
		)
	}

  onAuthChange = isSignedIn =>{
    if(isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
    else this.props.signOut();
  }

  //cause it's called back so use arrow function
  onSignInClick = ()=>{
    this.auth.signIn();
  }
  onSignOutClick = () =>{
    this.auth.signOut();
    window.location.reload();
  }

//gapi.auth2.getAuthInstance().signIn();
  renderAuth(){
    switch(this.props.isSignedIn){
      case true:
        return this.renderSignOutButton();
      case false:
        return this.renderSignInButton();
      default:
        return <Loader 
        type="ThreeDots" 
        color="#00BFFF" 
        height={40} width={40}
        />
    }
  }

  render(){
    return(
      <div className="component">
        {this.renderAuth()}
      </div>
    )
  }
}

const mapstate2props = state =>{
  return{
    isSignedIn: state.auth.isSignedIn
  }
}

const styles = {
  signOut:{
    cursor:'pointer',
		backgroundColor:'#FAFAFA',
		width:'200px',
		height:'100px',
		borderRadius:'45%',
		borderColor:'#B3E5FC',
		fontSize:'20px',
		color:'#2E7D32'
  },
  signIn:{
    cursor:'pointer',
		backgroundColor:'#FAFAFA',
		width:'200px',
		height:'100px',
		borderRadius:'45%',
		borderColor:'#B3E5FC',
		fontSize:'20px',
		color:'#f44336'
  }
}

export default connect(mapstate2props,{signIn, signOut})(App);