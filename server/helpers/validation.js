/* eslint-disable */
export default{
    userSignupValidation: (req,res, next) => {

     const {
                userName, email, password, confirmPassword
            } = req.body;
            if(userName === '' || email === '' ){
                return res.json({message: 'Please fill in all fields'});
            }
        
            else if(typeof email != 'string'){
                return res.json({message: 'Invalid email'});
            }
            else if(password != confirmPassword){
                return res.json({message: 'Passwords do not match'});
                
            }
            return next();
        }
       
    }