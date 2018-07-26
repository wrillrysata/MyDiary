/** eslint disable */
import User from '../models/User';

class UserController extends User{
    constructor(){
        super();
    }

    signUp(req, res){
        const {
            username, email, password, confirmPassword
        } = req.body;
        if(username === '' || email === '' ){
            return res.json({message: 'Please fill in all fields'}.status(422));
        }
    
        else if(typeof email != 'string'){
            return res.json({message: 'Invalid email'}.status(401));
        }
        else if(password != confirmPassword){
            return res.json({message: 'Passwords do not match'}.status(401));
        }else{
        this.create(req, (error) => {
            if(error){
                res.status(409).json({message: 'An error occured'})
            }else{
                res.status(201).json({message: 'Registration successful'})
            }

        })
        }

        }
    }
module.exports = UserController;
