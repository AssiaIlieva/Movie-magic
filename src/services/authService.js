const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');

const SECRET = 'A1s2D3f4G5h6J7k8L9zqxwcevrbtnymui0o9p8';

// TODO: Check if the user already exists
exports.register = (userData) => User.create(userData);

exports.login = async (email, password) => {
    // Get User from DB
    const user = await User.findOne({email});

    // Check if User exits
    if(!user){
        throw new Error('Uncorrect email or password');
    }
    // Check if password is valid
    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        throw new Error('Uncorrect email or password')
    }

    // Generate jwt token
    const payload = {
        _id: user._id,
        email: user.email,
    }
    const token = await jwt.sign(payload, SECRET, {expiresIn: '2h'});
    // Return token
    return token;
}