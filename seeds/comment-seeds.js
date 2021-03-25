const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'High quality protein and free range',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Comes straight from nature',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'High in antioxidants and vitamins',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'A remedy and a spice',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'Contain high amounts of vitamins A, C, and E',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'Great source of proteins, vitamins and minerals',
    user_id: 6,
    post_id: 6
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
