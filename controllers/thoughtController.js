const { User, Thought } = require('../../models');

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
              ? res.status(404).json({ message: 'Oops -- No thought with that ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
    
    //add thought
    createThought(req, res) {
        Thought.create(req.body)
          .then((thought) => res.json(thought))
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
              ? res.status(404).json({ message: 'Oops -- No thought with that ID' })
              : Reaction.deleteMany({ _id: { $in: thought.reaction } })
          )
          .then(() => res.json({ message: 'Thought and any reactions associated are deleted' }))
          .catch((err) => res.status(500).json(err));
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

      addReaction(req, res) {
        res.send('---RIP---');
      },

      deleteReaction(req, res) {
        res.send('---RIP---');
      },
};