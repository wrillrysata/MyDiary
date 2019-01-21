import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class HomePage extends Component {
  constructor(){
    super();
   state = {
     toSignup: false,
     toSignin:false
   }
   
   this.renderSignin = this.renderSignin.bind(this);
   this.renderSignup = this.renderSignup.bind(this);
  }
  renderSignup(){
 this.setState({
   toSignup:true

 });
  }
  renderSignin(){
    this.setState({
      toSignin:true
   
    });
  }
   
    render() {
        if (this.state.toSignup === true) {
          return <Redirect to='/signup' />
        }
        if (this.state.toSignin === true) {
          return <Redirect to='/signin' />
        }
        return (
          <div class="cover flex">
         <div class="center">
              <h1>My Diary</h1>
              <p>A safe space for your thoughts</p>
              {this.renderSignup}
              <button class="btn" id="sign-up" onclick={this.renderSignup}>Sign up</button>
              {this.renderSignin}
              <button class="btn" id="sign-in" onclick={this.renderSignin}>Sign in</button>
            </div>
          </div>
        )
    }
    }
export default HomePage;
