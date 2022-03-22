const { User, Thought } = require('../models');

module.exports = {

    // get all users
    getUsers(req, res) {
        User.find()
        // select('-__v')
          .then((users) => res.json(users))
          .catch((err) => {
            console.log(err);
            res.status(500).json(err)
          });
      },

    // get user by Id
    getUserById(req, res) {
        User.findOne({ _id: req.params.userId })
          .select('-__v')
          .populate('thoughts')
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'Oops -- No user with that ID' })
              : res.json(user)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err)
          });
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
              ? res.status(404).json({ 
                message: 'Oops -- No user with that ID' 
              })
              : Thought.deleteMany({ _id: { $in: user.thoughts } })
          )
          .then(() => res.json({ 
            message: 'User and any of their thoughts are deleted' 
          }))
          .catch((err) => {
            console.log(err);
            res.status(500).json(err)
          });
      },

    // update a user
    updateUser(req, res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'Oops -- No user with that ID' })
            : res.json(user)
        )
        .catch((err) => {
          console.log(err);
          res.status(500).json(err)
        });
    },

    
    //  add a Follower
    addFollower(req, res) {
      User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { followers: req.params.followerId } },
      { runValidators: true, new: true }
      )
      .then((user) =>
          !user
          ? res.status(404).json({ message: 'Oops -- No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
  },

    // delete a Follower (unfollow)
    unFollow(req, res) {
      User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { followers: req.params.followerId } },
      { runValidators: true, new: true }
      )
      .then((user) =>
          !user
          ? res.status(404).json({ message: 'Oops -- No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
  },


};