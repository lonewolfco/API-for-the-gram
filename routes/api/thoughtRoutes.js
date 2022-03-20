
const router = require('express').Router();

const {
    getThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController.js');

//========== **`thought routes`** ==========


//------> /api/thoughts
router.route('/').get(getThoughts).post(createThought);

//------> /api/thoughts/thoughtId
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

//------> /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);

//------> /api/thoughts/:thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);



// Require model 
const { Thought } = require('../../models');


//========== **`/api/thoughts`** ==========

// * `GET` to get all thoughts
router.get('/', async (req, res) => {
    try {
        const thoughtDoc = await Thought.find({});
                res.json( thoughtDoc );
            } catch(err) {
                res.status(500).json({ message: 'Yikes! Looks like something went wrong'});
    
            }
});

// * `GET` to get a single thought by its `_id`
router.get('/:thoughtId', async (req, res) => {

    try {
        const thoughtDoc = await User.findbyId(req.params.thoughtId);
                res.json( thoughtDoc );
            } catch(err) {
                res.status(500).json({ message: 'Yikes! Looks like something went wrong'});
    
            }
});

// * `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

// ```json
// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// ```

// * `PUT` to update a thought by its `_id`

// * `DELETE` to remove a thought by its `_id`





//========== **`/api/thoughts/:thoughtId/reactions`** ==========

// * `POST` to create a reaction stored in a single thought's `reactions` array field
// app.post('/thoughts/:thoughtId/reactions', async (req, res) => 

// );




// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
// ---> TODO: Update all the properties to make sure the accurate ones ar ebeing used

// remove the nested reaction subdocument from the thoughts document
router.delete('/:thoughtId/reactions/:reachtionId', async (req, res) => {

    const thought = await Thought.findOneAndUpdate(
        { 'reactions.__id': req.params.reaction_id },
        // you'll want to use $pull and $push operators
        { 
            $pull: { 
                reactions: { _id: req.params.reaction_id } } },
        { new: true }
    );

    res.json( thought );
});


module.exports = router;