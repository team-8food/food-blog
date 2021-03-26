const { Post } = require('../models');

const postdata = [
  {
    title: 'Spaghetti',
    img: 1,
    post_content: 'Italian cuisine that pairs with wine, protein and any choice of sauce',
    user_id: 1
  },
  {
    title: 'Grits and Salmon',
    img: 2,
    post_content: 'Dish filled with plenty of protein and also savory',
    user_id: 2
  },
  {
    title: 'Crunch Wrap Supreme',
    img: 3,
    post_content: 'Made right out of your own home and taste better compared to fast food',
    user_id: 3
  },
  {
    title: 'Poke Bowl',
    img: 4,
    post_content: 'Loaded with good fats and minerals. A balanced and easy meal',
    user_id: 4
  },
  {
    title: 'Chicken noodle soup',
    img: 5,
    post_content: 'Great choice for a warm comforting meal',
    user_id: 5
  },
  {
    title: 'Egg fried rice',
    img: 6,
    post_content: 'Great source of proteins, vitamins and minerals',
    user_id: 6
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
