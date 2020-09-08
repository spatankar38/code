import express from 'express'
import User from '../models/userModel'
import { getToken } from '../util';

const router = express.Router();

router.post("/signin", async(req, res) => {
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if(signinUser){
        const tokenVal = getToken(signinUser);
        console.log("Token Val : " + tokenVal)
        res.send({
            id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: tokenVal
        });
    }
    else{
        res.status(401).send({msg: 'Invalid username or password'})
    }
})

router.get("/createadmin", async(req, res) => {
    try {
        const user = new User({
            name: 'S',
            email: 'sp@sp.com',
            password: '1234',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({msg: error.message});
    }

});

router.post("/register", async(req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    console.log("user object received : " + user);
    const newUser = await user.save();

    if(newUser){
        res.send({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: getToken(newUser)
        });
    }
    else{
        res.status(401).send({msg: 'Invalid user details'})
    }
})

export default router;