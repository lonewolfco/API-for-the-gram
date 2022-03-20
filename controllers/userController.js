const { User, Thought } = require('../../models');

module.exports = {

    // get all users
    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },

    // get user by Id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'Oops -- No user with that ID' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },

    // create a user
    createUser(req, res) {
        User.create(req.body)
          .then((user) => res.json(user))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
    
    //  delete a user & its' associated followers
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'Oops -- No user with that ID' })
              : Follower.deleteMany({ _id: { $in: user.followers } })
          )
          .then(() => res.json({ message: 'User and any followers associated are deleted' }))
          .catch((err) => res.status(500).json(err));
      },

    
    //  add a Follower

    // delete a Follower (unfollow)
};