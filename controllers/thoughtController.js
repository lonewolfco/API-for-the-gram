const { User, Thought } = require('../models');
const { Types } = require('mongoose');

module.exports = {

    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
          .then((thoughts) => res.json(thoughts))
          .catch((err) => res.status(500).json(err));
      },

    // get single thought by id
    getThoughtById(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: '💀 Oops -- No thought with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    
    //add thought & add it to the corresponding user
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => {
            return User.findOneAndUpdate(
              { _id: req.body.userId },
              { $addToSet: { thoughts: thought._id } },
              { new: true }
          );
          })

          .then((user) =>
            !user
              ? res.status(404).json({
                message: 'Received thought, but no user found with that ID 💀'
              })
            : res.json('Thought Created')
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },

    // delete thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'Oops -- No thought with that ID 💀' })
              : User.deleteMany({ _id: { $in: thought.reaction } })
          )
          .then(() => res.json({ message: 'Thought and any reactions associated are deleted 🚮' }))
          .catch((err) => {
            console.log(err);
            res.status(500).json(err)
          });
      },

    // update thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'Oops -- No thought with that ID' })
              : res.json(course)
          )
          .catch((err) => res.status(500).json(err));
      },

      // add a Reaction
      addReaction(req, res) {
        Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'Oops -- No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

      // delete a Reaction
      deleteReaction(req, res) {
        Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { runValidators: true, new: true }
        )
        .then((thought) =>
            !thought
            ? res.status(404).json({ message: 'Oops -- No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
    },

};