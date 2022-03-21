// Define Mongoose
const { Schema, model } = require('mongoose');
var { isEmail } = require('validator');

const userSchema = new Schema({
        // TODO: Unique correct? What is trimmed?
        username: { 
                type: String, 
                unique: true,  
                required: true,
                trim: true,
        },
        email: { 
                type: String, 
                unique: true, 
                required: true,
                validate: [ isEmail, 'Please provide a valid email.' ]
        },
        thoughts: [
                {
                        type: Schema.Types.ObjectId,
                        ref: 'Thought',

                },
         ],
        // TODO: how to reference array of _id values in user model
        followers: [
                {
                        type: Schema.Types.ObjectId,
                        ref: 'User',

                },
        ]
},
        {
        toJSON: {
          virtuals: true,
        },
        }
);


userSchema.virtual('followerCount').get(function () {
        return this.followers.length;
    });

// Create the User model
const User = model('User', userSchema);

const handleError = (err) => console.error(err);


module.exports = User;