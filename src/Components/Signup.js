import React, { Component } from 'react';
import Navbar from './HeaderComponents/Navbar';
import '../css/App.css';

class Signup extends Component {
    constructor(props){
        super()
        this.state = {
        email:'',
        mailError:'',
        username: '',
        usernameError:'',
        password:'',
        passwordError:'',
     }
        this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
     

    };
    validate (){
        let isError = false;

        if (this.state.email === '' ){
            isError = true;
            this.setState({
                mailError:'Email field cannot be empty'
            })
          }

        if (this.state.username.length < 3) {
          isError = true;
          this.setState({
            usernameError:'Username needs to be atleast 5 characters long'
        })
        }
    
       
        if (this.state.password === '') {
            isError = true;
            this.setState({
                passwordError:'Password field cannot be empty'
            })
          }
    

    
        return isError;
        
    };

    handleSubmit (event){
        event.preventDefault();
        this.setState ({
            mailError:'',
            usernameError:'',
            passwordError:'',
        
    });
        const err = this.validate();

       if(!err){
        
        const { 
            username, email, password
        } = this.state;
        //use fetch api to save to database;
        fetch('/api/v1/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: username,
              email: email,
              password: password,
            }),
          }).then(res => res.json())
            .then(json => {
              console.log('json', json);
              if (json.success) {
                this.setState({
                  usernameError: json.message
                  //isLoading: false,
                  //signUpEmail: '',
                  //signUpPassword: '',
                });
              } else {
                this.setState({
                  usernameError: json.message
                  //isLoading: false,
                });
              }
            });
        }
       
        }
            
        
        
       
    
         
        
    
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value

        })
         
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
     {this.state.mailError != '' && <li>{this.state.mailError}</li>}
     {this.state.passwordError != '' && <li>{this.state.passwordError}</li>}
     </ul>
    
   
     
     <input type="text" name="username" placeholder="Username" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" title="Enter a valid username" onChange={event => this.handleChange(event)} />
     
     <input type="text" name="email" placeholder="Enter mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Enter a valid email" onChange={event => this.handleChange(event)} />
     <input type="password" name="password" placeholder="Enter Password" onChange={event => this.handleChange(event)} />

    <input type="submit" value="Signup" />
    </form>
    </center>
               </div>
            </div>
        )
   
    }
}
export default Signup;
  
