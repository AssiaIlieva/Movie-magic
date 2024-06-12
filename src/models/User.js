const {Schema, model, MongooseError} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'All fields are required'],
        lowercase: true,
        unique: true,
        match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, 'Invalid email address'],
        minLength: [10, 'Email should be at least 10 characters']
    },
    password: {
        type: String,
        required: [true, 'All fields are required'],
        match: [/^[A-Za-z0-9]+$/, 'Password should be alphanumeric'],
        minLength: [6, 'Password must be at least 6 characters long'],
    }
});

userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
});

// userSchema.virtual('rePassword')
//     .set(function(value){
//         if(value !== this.password){
//             throw new MongooseError('Password missmatch!')
//         }
//     })

const User = model('User', userSchema);


module.exports = User