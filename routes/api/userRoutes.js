const router = require('express').Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFollower,
    unFollow
} = require('../../controllers/userController');


//========== **`user routes`** ==========

//------> /api/users
router.route('/').get(getUsers).post(createUser);

//------> /api/users/:userId
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

//------> /api/users/:userId/followers
router.route('/:userId/followers').post(addFollower);

//------> /api/users/:userId/followers/:followerId
router.route('/:userId/followers/:followerId').delete(unFollow);


module.exports = router;
