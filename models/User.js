// Define Mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// * `username`
        //  * String
        // * Unique
        // * Required
        // * Trimmed

// * `email`
        // * String
        // * Required
        // * Unique
        // * Must match a valid email address (look into Mongoose's matching validation)

// * `thoughts`
        // * Array of `_id` values referencing the `Thought` model

// * `friends`
        // * Array of `_id` values referencing the `User` model (self-reference)

// **Schema Settings**:
// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.


const userSchema = new mongoose.Schema({
        // TODO: Unique correct? What is trimmed?
        username: { 
                type: String, 
                unique: true,  
                required: true 
        },
        // TODO: unique correct? Look up how to match a valid email dress in mongoose validation
        email: { 
                type: String, 
                unique: true, 
                required: true
        },
        thoughts: [
                {
                        type: Schema.Types.ObjectId,
                        ref: 'Thought',

                },
         ],
        // TODO: how to reference array of _id values in user model
        friends: [
                {
                        type: Schema.Types.ObjectId,
                        ref: 'User',

                },
        ]
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Create a new instance of the model including any subdocuments

const handleError = (err) => console.error(err);

User.create(
        { 
                username: 'Mesa', 
                email: 'mesa@woof.com'
        },
        (err) => (err ? handleError(err) : console.log('Created new document'))
);

module.exports = User;