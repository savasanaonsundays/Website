// Admin
const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');// 11. ENCRYPT THE PASSWORD
const jwt = require('jsonwebtoken');//23.NEED THIS FOR TOKEN
const keys = require('../../config/keys'); //TO ACCESS
const passport = require('passport');//TO CREATE A PROTECTED ROUTE (ROUTER GET PART AT THE BOTTOM)


// Load Input Validation ???????
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model  1.BRING ADMIN MODEL
const Admin = require('../../models/Admin'); //OUT FROM THE API FOLDER OUT FORM THE ROUTES FILE INTO MODELS INTO ADMIN


// @route   GET api/users/test  
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'ADMIN Works' }));


//1. ROUTE FOR REGISTRATION TO REGISTER A USER WITH ACCESS AS PUBLIC
// @route   GET api/users/register 
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => { //BELOW PASSING IN REQ.BODY TO THE VALIDATEREGISTERIMPUT FROM THE REGISTOR.JS IN VALIDATION
  const { errors, isValid } = validateRegisterInput(req.body);//PULLING THESE OUT OF 
//ANY ROUTE THAT IS GOING TO TAKE IN DATA. ANY ROUT THAT IS GOING TO TAKE IN REQUEST.BODY WILL USE THESE IS-VALID AND ERRORS CODE TO CHECK IT

  // Check Validation
  if (!isValid) { //THE WAY WE CHECK TO SEE IF THERE ARE ERRORS IS IF VALID IS FALSE FROM THE 
    return res.status(400).json(errors);
  }

//3.USE FIND ONE CAUSE TRY TO FIND A RECORD   /THE EMAIL IS PASSED IN
  //4 is in server js (adding body passer)
  Admin.findOne({ email: req.body.email }).then(admin => { //6. .THEN IS PROMISES
    if (admin) { //WE ACCESS FORM FROM REQUEST BODY BUT WE NEED BODY PASER SO BRING IT IN /'IF USER' CHECK IF THERE IS A USER FOR THAT EMAIL ADDRESS
      errors.email = 'Email already exists'; //6.A. AND OBJECT KEY -EMAIL VALUE -EMAIL ALREADY EXISTS
      return res.status(400).json(errors); // 7.THROW AN ERROR
    } 
      

      const newAdmin = new Admin({ //8.CREATE NEW USER
        email: req.body.email, //WILL COME FROM THE FORM
        password: req.body.password 
      });

      bcrypt.genSalt(10, (err, salt) => { //12.THIS WILL TAKE IN THE CHARACTERS WE NEED WHICH IS TEN //THEN CALL BACK 
        bcrypt.hash(newAdmin.password, salt, (err, hash) => { //ONCE WE GET SALT ME MAKE A HASH ... THEN WE PASS IN THE SALT
          if (err) throw err; //IF THERE IS AN ERROR
          newAdmin.password = hash; //SETTING THE PASSWORD TO A HASHED PASSWORD
          newAdmin
            .save()
            .then(admin => res.json(admin))//GIVE US THE USER THAT IS CREATED THEN SEND BACK A SUCCESFUL
            .catch(err => console.log(err));//// 13. GO TO POSTMAN SHOWS RESPONCE? CAN TEST IT? 21.00OF USER REGISTRATION AND POSTMAN
        }); //14.CHECKED IT THAT WORKED
        //LOOKED IN MLAB DATABASE TO SEE IF IT WENT IN . IT AUTOMATICALLY CREATED A USERS COLLECTION. SO WE ARE NOW ABLE TO REGISTER USERS THROUGH OUR API
      });//15.NEXT VIDEO ONCE A USER IS LOGGED IT ALL VERIFIED EMAIL AND PASSWORD VERIFIED THEY ARE GOING TO GET A JSON WEB TOKEN. THEY CAN SEND TOKEN ALONG TO ACCES A PROTECTED ROUTE.THE JAON WEB TOKEN MODULE CREATES THE TOKEN THE PASSPORT AND OTHER PASSPORT VALIDATE IT AND EXTRACT USERS INFORMATION FROM IT 
    //16 WE NEED TO ADD THE LOGIN FUNCTIONALLITY ACCEPT USERS EMAIL VALIDATE THAT EMAIL EXIST AND PASSWORD 
  }); 
});

router.post('/login', (req, res) => {//17. THEY ARE GOING TO SEND A FORM THAT IS GOING TO HAVE AND EMAIL AND A PASSWORD. SO GOING TO PUT THEM INTO VARIABLES /GET IT FROM REQ.BODY.EMAIL
  const { errors, isValid } = validateLoginInput(req.body);//FROM THE LOGIN.JS IN VALIDATION

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email; //17A THE SECOND BIT OF THAT 
  const password = req.body.password;

  // Find user by email
  Admin.findOne({ email }).then(admin => {
    // Check for user
    if (!admin) { //18.CHECKING IF THERE IS A USER
      errors.email = 'User not found';
      return res.status(404).json(errors);````
    }

    // Check Password /19. AFTER WE FIND THE USER WE HAVE TO MATCH THE PASSWORD.THIS PASSWORD IS PLAIN BUT STORED ONE IS HASHED(USER.PASSWORD)
    bcrypt.compare(password, admin.password).then(isMatch => { //COMPARE IS A CHECKS IF THE HASH IS THE SAME
      if (isMatch) {
        // User Matched
        const payload = { id: admin.id}; // Create JWT Payload
//25 IS ABOVE. THIS IS WHAT IS IN THE JWT PAYLOAD. IT IS REFERENCED IN  
        
        // Sign Token 24.THIS IS IN JSON WT DOCUMENTATION
        jwt.sign( //THIS TAKES IN PAYLOAD. PAYLOAD IS WHAT WE WANT TO INCLUED IN THE TOKEN. WE WANT TO INCLUDE SOME USER INFORMATION. BECAUSE WHEN THE TOKEN GETS SENT TO THE SERVER WE WANT TO KNOW WHAT USER IT IS. WE ALSO NEED TO SEND A SECRET OF KEY. WE NEED TO SEND AN EXPIRATION (THIS IS TWO LINES ABOVE)
          payload,//26. PASSING IN THE PAYLOAD WE JUST CREATED
          keys.secretOrKey, //27 WE ALSO NEED TO PASS IN SECRET OF KEY (28.=CONFIG./KEYS IN(BUT NEED TO PUT IT IN CONFIG KEYS )
          { expiresIn: 3600 },//29 CAN MAKE IT EXPIRE IN AN HOUR.  SECONDS
          (err, token) => {//30 
            res.json({ //31 WE WANT TO SEND TOKEN AS RESPONSE
              success: true,
              token: 'Bearer ' + token // 32 THE WAY WE FORMAT THE TOKEN IN THE HEADER. WE SHOULD GET THAT TOKEN BACK NOW IF WE HAVE A SUCCESFUL LOGIN. HE CHECKS ON POSTMAN
            }); //(33. IS ADDING PASSPORT IS SERVER.JS FILE)
          }
        );
      } else { //20.IF THE PASSWORD DOESNT MATCH //21. CHECK ON POSTMAN 6.50MINUTES OF EMAIL AND PASSWORD LOGIN
        errors.password = 'Password incorrect'; //22.WE HAVE ONLY ADDED THE LOGIC FOR LOGIN AT THIS STAGE
        return res.status(400).json(errors);
      }
    });//ONCE WE ADD THE PASSPORT PART THE TOKEN THAT THIS CODE GIVES US 
  });// WE WILL PUT THE TOKEN IN THE HEADERS AN AUTHERISATION
  //THAT WILL SEND IT TO THE SERVER THAT WILL VALIDATE THE USER
  //GET THE USER INFORMATION AND WE CAN USE IT IN OUR EXPRESS SERVER
});//PASSPORT WILL HELP US MAKE ROUTES PRIVATE

// @route   GET api/admins/current
// @desc    Return current admin
// @access  Private
router.get(
  '/current',  
  passport.authenticate('jwt', { session: false }),//PASSING IN JWT
  (req, res) => {// TREAT THIS AS ANY OTHER ROUTE EXEPT IT'S PROTECTED
    res.json({
      id: req.admin.id,//SENDING THE USER INFORMATION BACK 
      name: req.admin.name,
      email: req.admin.email
    });
  }//SO YOU LOGIN AND GET THE TOKEN FOR THE USER, WE TRY TO GET A PROTECTED ROUTE AND IT RESPONDS WITH THE USER INFORMANTION
);//IT IS ACCEPTING A TOKEN AND VALIDATING A USER AND ACCESING A PROTECTED ROUTE

module.exports = router;