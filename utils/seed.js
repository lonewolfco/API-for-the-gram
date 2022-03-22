const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { users, thoughts } = require('./data.json');
// const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Gram Data Access Granted 👾 ');

  // Drop existing Users
  await User.deleteMany({});

  // Drop existing Thoughts
  await Thought.deleteMany({});



  // Add user to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Add followers and thoughts to the users
  await User.collection.findOneAndUpdate(
    { _id: users[0]._id },
    { $addToSet: { followers: users[1]._id, thoughts: thoughts[0]._id } }
  );
  await User.collection.findOneAndUpdate(
    { _id: users[1]._id },
    { $addToSet: { followers: users[0]._id, thoughts: thoughts[1]._id } }
  );

  // Get some random assignment objects using a helper function that we imported from ./data
//   const assignments = getRandomAssignments(20);

//   // Loop 20 times -- add students to the students array
//   for (let i = 0; i < 20; i++) {
//     const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];
//     const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

//     students.push({
//       first,
//       last,
//       github,
//       assignments,
//     });
//   }

//   // Add students to the collection and await the results
//   await Student.collection.insertMany(students);

//   // Add courses to the collection and await the results
//   await Course.collection.insertOne({
//     courseName: 'UCLA',
//     inPerson: false,
//     students: [...students],
//   });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Gram Data Seeded 🪴');
  process.exit(0);
});
