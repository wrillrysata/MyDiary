import React, { Component } from 'react';
import Navbar from './HeaderComponents/Navbar';
import { Redirect } from 'react-router';
import '../css/App.css';

class Signin extends Component {
    constructor(props){
        super()
        this.state = {
            username:'',
            email:'',
            password:'',
            usernameError:'',
            passwordError:''

     }
        this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }
    validate (){
        let isError = false;
        
    /** 
        if (this.state.username === ''  ) {
          isError = true;
          this.setState({ 
            usernameError :'Username field cannot be empty'
            });
          
        }
        if (this.state.username.length < 3  ) {
            isError = true;
            this.setState({ 
              usernameError :'Username should be at least 3 charaacters long'
              });
            
          }
          **/
        if( this.state.password === ''){
            isError = true;
            this.setState({ 
                passwordError :'Password field cannot be empty'
                });
        }
    

       

    
        return isError;
        
    };
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value

        })
         
    }
    handleSubmit (event){
        event.preventDefault();
        this.setState ({
            usernameError:'',
            passwordError: ''
        });
        const err = this.validate();
        

       if(!err){
       const { 
        username, password //should be username. Rework.
    } = this.state;
            //use fetch api to login;
        fetch('/api/v1/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          }).then(res => res.json())
            .then(json => {
              if (json.success) {
                this.setState({
                  usernameError: json.message
                });
            
              } else {
                      //redirect to dashboard
                  console.log('redirecting');
                return <Redirect to ="/home" />
                 
                //this.setState({
                    //props.history.push('/dashboard)
                 // usernameError: json.message
                  //isLoading: false,
              //  });
              }
            });
           
       
        }
            
        
        
       
    }
    render(){
       
        return(
            <div>
            <Navbar />
            <div className="form col-md-12">
            <center>
            <form onSubmit={this.handleSubmit}>
             <ul className="error">  
    
             {this.state.usernameError != '' && <li>{this.state.usernameError}</li>}
     {this.state.passwordError != '' && <li>{this.state.passwordError}</li>}
     </ul>
     <input type="text" name="username" placeholder="Username" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" title="Enter a valid username" onChange={event => this.handleChange(event)} />
          <input type="password" placeholder="Enter Password" name="password" onChange={event => this.handleChange(event)}/>
          <input type="submit" value="Sign in" />
          </form>
          </center>
          
        </div>
            </div>
            );
           }
        }
        export default Signin;
