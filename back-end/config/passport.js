const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');//BECAUSE WE ARE SEARCHING FOR THE USER THAT COMES WITH THE PAYLOAD
const Admin = mongoose.model('admins');//THE ADMIN admins COMES FROM THE BOTTOM OF USER MODEL
const keys = require('../config/keys');//SENDING KEYS BECAUSE THAT HAS OUR SECRET. WE ARE SENDING IT WITH THE REQUEST BECAUSE WE NEED TO VALIDATE THAT

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();//<THATS A FUNCTION
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {//PASSING IN PASSPORT AS A PARAMETER. IN SERVER.JS THE LAST BIT OF THE PASSPORT CONFIG
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {//USING A NEW JWT STRADEGY /OPTS= PASSING IN OPTIONS/ WHAT WE GET BACK IS A FUNCTION WHICH GIVES US OUR JWT-PAYLOAD AND DONE
      Admin.findById(jwt_payload.id) //PAYLOAD SHOULD INCLUDE WHAT WE INCLUDED IN OUR PAYLOAD IN USER.JS IN ROUTES. (LIKE YOU DONT ADD IT IN THIS PAGE BUT IT IS HOLDING IT)
        .then(admin => {
          if (admin) {
            return done(null, admin);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
