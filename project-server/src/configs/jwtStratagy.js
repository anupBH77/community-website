const passportJWT = require('passport-jwt');
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;
const jwtSecret = 'your_secret_key'; // Replace with your own secret key

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromExtractors([
      ExtractJwt.fromAuthHeaderAsBearerToken(),
      ExtractJwt.fromUrlQueryParameter('token'),
      (req) => {
        // Custom extractor for the token from cookies
        return req.cookies.jwt; // Assuming the token is stored as 'jwt' cookie
      },
    ]),
    secretOrKey: jwtSecret,
  };
  
  const jwtStrategy = new JwtStrategy(jwtOptions, (payload, done) => {
    // Your logic to verify the user based on the payload
    // For simplicity, we'll assume the payload contains a 'user' property with user information.
    return done(null, payload.user);
  });

  module.exports ={
    jwtOptions,
    jwtStrategy,
  }
  