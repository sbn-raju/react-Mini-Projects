import express from "express";
import mongoose from "mongoose";
import User from "./models/loginUser.js";
import UserRegister from "./models/registerUser.js";


connectDb()

async function connectDb(){
    await mongoose.connect("mongodb://localhost:27017/random")
    .then((response)=>{
        console.log("DB connected");
    }).catch((err)=>{
        console.log(err);
    })
}



const app = express();

app.listen(8080,()=>{
    console.log("App is listening at the port 8080");
});

app.post("/register", async(req,res)=>{
    const { username, password, email } = req.body;

  try {
    // Check if the username or email is already in use
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already in use' });
    }

    // Hash the password

    // Create a new user
    const newUser = new User({ username, password, email });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
})


app.post("/post",async(req,res)=>{
    const { username, password } = req.body;

    try {
      // Find the user by username
      const user = await User.findOne({ username });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
  
      // Check if the password is correct
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
      }
  
      // Password is correct, login successful
      res.status(200).json({ message: 'Login successful' });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
})
