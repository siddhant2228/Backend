const bcrypt = require('bcrypt')
const config = require('../config/db')
const jwtProvider = require("../config/jwtProvider")
const User = require("../models/user_model")
require('dotenv').config();
const userService = require("../services/user")


exports.signup = async(req,res)=>{
    try{
        const {username, email, password, role} = req.body;
        const user = await User.create({username, email, password, role})
        // const jwt = jwtProvider.generateToken(user._id.user.)
        return res.status(200).send({message:"User registered successfully."})
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }
}

exports.login = async(req,res)=>{
    const {username,password} = req.body;
    // console.log(req.body)
    try{
        const user = await User.findOne({username})
        console.log('User:', user);
        if(!user){
            return res.status(404).send({message: 'user not found with this username.'})
        }
        if(password!=user.password) return res.status(401).send({message: 'Invalid Password...'})
        console.log(user.role)

        // const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            return res.status(401).send({message: 'Invalid Password...'})
        }
        
        const jwtToken = jwtProvider.generateToken(user._id, user.role);
        console.log(user.role)
        return res.status(200).send({message:'User login successfully.',jwtToken})

    }catch(error){
        return res.status(500).send({error:error.message})

    }
}


// const login = async(req,res,next)=>{
//     const {username,password} = req.body;
//     // console.log(req.body)
//     try{
//         const user = await userService.getUserByname(username)
//         console.log('User:', user);
//         if(!user){
//             return res.status(404).send({message: 'user not found with this username.'})
//         }

//         const isPasswordValid = await bcrypt.compare(password,user.password);

//         if(!isPasswordValid){
//             return res.status(401).send({message: 'Invalid Password...'})
//         }
        
//         const jwt = jwtProvider.generateToken(user._id)
//         return res.status(200).send({message:'User login successfully.',jwt})

//     }catch(error){
//         return res.status(500).send({error:error.message})

//     }
// }

