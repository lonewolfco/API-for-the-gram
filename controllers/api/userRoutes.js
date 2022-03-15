const router = require('express').Router();
// Require model 
const { User } = require('../../models');


//========== **`/api/users`** ==========
// (path already created)

// * `GET` all users
router.get('/', async (req, res) => {
    try {
        const userDoc = await User.find({});
                res.json( userDoc );
            } catch(err) {
                res.status(500).json({ message: 'Yikes! Looks like something went wrong'});
    
            }
});

// * `GET` a single user by its `_id` and populated thought and friend data
router.get('/:userId', async (req, res) => {

    try {
        const userDoc = await User.findbyId(req.params.userId);
                res.json( userDoc );
            } catch(err) {
                res.status(500).json({ message: 'Yikes! Looks like something went wrong'});
    
            }
});

// * `POST` a new user:

// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```

// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`

// **BONUS**: Remove a user's associated thoughts when deleted.




// ========== **`/api/users/:userId/friends/:friendId`** ==========

// * `POST` to add a new friend to a user's friend list

// * `DELETE` to remove a friend from a user's friend list



module.exports = router;