const passport=require('passport')
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const path = require('path')

const { signUpRouter } = require('../controller/signUp/signUp.route');
const { User } = require('../schema/UserSchema');


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 



const jwt = require('jsonwebtoken');
const { jwtStrategy } = require('../configs/jwtStratagy');

const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); // Use cookie-parser middleware

// JWT Configuration
const jwtSecret = 'your_secret_key'; 


passport.use(jwtStrategy);

// Initialize Passport
app.use(passport.initialize());

const  {chkPass,getUserData}= require('../configs/chkUser&Pass');
const { posts } = require('../schema/postsSchema');

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log("entered data",username," ",password)
  const dbUserData= await getUserData(username);
  console.log(dbUserData)
  if(!dbUserData){
    return res.status(401).json({message:"username not found"});
  }
  const {DBusername,DBpassword,DBid}= dbUserData
  if ( await chkPass(password,DBpassword)) {
    const user = { id: DBid, username: DBusername };
    const token = jwt.sign({ user }, jwtSecret);

    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  
    res.cookie('jwt', token, { expires: oneYearFromNow, httpOnly: true });

    res.json({userData:{username}});
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const {getPostRouter} = require('../controller/getPosts/getPost.Router');
const { postRouter } = require('../controller/post/post.router');
app.use('/posts',getPostRouter);
app.use('/post',postRouter);
app.get('/cookie',(req,res)=>{
  res.json(req.cookies['jwt'])
})
app.get('/logout',(req,res)=>{
  res.cookie('jwt',{expires:new Date(0)})
  res.send('loggedout');

})
app.use('/images',express.static(path.join(__dirname,'..','/controller/post/postImages')))

app.use('/signup',signUpRouter);


module.exporths = {
    app,
}

