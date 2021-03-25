const { Post } = require('../models');

const postdata = [
  {
    title: 'Eggs',
    img: 1,
    post_content: 'High quality protein and free range',
    user_id: 1
  },
  {
    title: 'Honey',
    img: 2,
    post_content: 'Comes straight from nature',
    user_id: 2
  },
  {
    title: 'Grapes',
    img: 3,
    post_content: 'High in antioxidants and vitamins',
    user_id: 3
  },
  {
    title: 'Cinnamon',
    img: 4,
    post_content: 'A remedy and a spice',
    user_id: 4
  },
  {
    title: 'Sweet potatoe',
    img: 5,
    post_content: 'Contain high amounts of vitamins A, C, and E',
    user_id: 5
  },
  {
    title: 'Tilapia fillets',
    img: 6,
    post_content: 'Great source of proteins, vitamins and minerals',
    user_id: 6
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
