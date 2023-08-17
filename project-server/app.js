// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // Import the cookie-parser middleware
const passport = require('passport');


const jwt = require('jsonwebtoken');
const { jwtStrategy } = require('./configs/jwtStratagy');

const app = express();
const port = 3000;

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // Use cookie-parser middleware

// JWT Configuration
const jwtSecret = 'your_secret_key'; // Replace with your own secret key



passport.use(jwtStrategy);

// Initialize Passport
app.use(passport.initialize());

// Route to generate and return a JWT token
app.post('/login', (req, res) => {
  // Replace this with your actual user authentication logic.
  const { username, password } = req.body;
  if (username === 'example' && password === 'password') {
    const user = { id: '1', username: 'example' };
    const token = jwt.sign({ user }, jwtSecret);

    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  
    // Generate the JWT token (Replace this with your actual token generation logic)
    // const token = generateJwtToken(req.user); // Assuming req.user contains the user information
  
    // Set the 'jwt' cookie with the generated token and the calculated expiration date (one year from now)
    res.cookie('jwt', token, { expires: oneYearFromNow, httpOnly: true });

    res.json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected route example - requires authentication
app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'You have accessed the protected route' });
});
app.get('/cookie',(req,res)=>{
  res.json(req.cookies['jwt'])
})
app.get('/logout',(req,res)=>{
  res.cookie('jwt',{expires:new Date(0)})
  res.send('loggedout');

})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
