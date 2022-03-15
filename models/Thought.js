const mongoose = require('mongoose');

// * `thoughtText`
        // * String
        // * Required
        // * Must be between 1 and 280 characters

// * `createdAt`
        // * Date
        // * Set default value to the current timestamp
        // * Use a getter method to format the timestamp on query

// * `username` (The user that created this thought)
        // * String
        // * Required

// * `reactions` (These are like replies)
        // * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:
// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

// SUB DOCUMENT -- Reaction
// (SCHEMA ONLY)

// * `reactionId`
        //   * Use Mongoose's ObjectId data type
        //   * Default value is set to a new ObjectId

// * `reactionBody`
        //   * String
        //   * Required
        //   * 280 character maximum

// * `username`
        //   * String
        //   * Required

// * `createdAt`
        //   * Date
        //   * Set default value to the current timestamp
        //   * Use a getter method to format the timestamp on query

// **Schema Settings**:
// This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.


const reactionSchema = new mongoose.Schema({
        // reactionId: set to objectId
        reactionBody: {
                type: String,
                required: true,
                // max character is 280
        },
        username:  { 
                type: String, 
                required: true 
        },
        createdAt: { 
                type: Date, 
                default: Date.now 
        },

});



// TODO: Define a new schema named `thoughtSchema` for the subdocument
const thoughtSchema = new mongoose.Schema({
        thoughtText: { 
                type: String, 
                required: true 
                // between 1 and 280 characters
        },
        createdAt: { 
                type: Date, 
                default: Date.now 
        },
        username:  { 
                type: String, 
                required: true 
        },
        reactions: [ reactionSchema ],
       });
        

        
       // TODO: Create a model named `Library`
       const Thought = mongoose.model('Thought', thoughtSchema);


       const handleError = (err) => console.error(err);
        
//        // TODO: Create a new instance of the model including the subdocuments
//        const bookData = [
//         { title: 'Dune', price: 27},
//         { title: 'Memoirs of a Geisha', price: 17}
//        ]
        
//        Library.create(
//         { name: 'The Book Club', books: bookData },
        
//         (err, data) => {
//           if (err) {
//             console.error(err);
//           }
//           console.log(data);
//         }
//        );
        
       module.exports = Library;
       