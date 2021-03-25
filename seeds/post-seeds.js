const { Post } = require('../models');

const postdata = [
  {
    title: 'Recipe 1',
    img: 1,
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1
  },
  {
    title: 'Recipe 2',
    img: 2,
    post_content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user_id: 2
  },
  {
    title: 'Recipe 3',
    img: 3,
    post_content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    user_id: 3
  },
  {
    title: 'Recipe 4',
    img: 4,
    post_content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 4
  },
  {
    title: 'Recipe 5',
    img: 5,
    post_content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
