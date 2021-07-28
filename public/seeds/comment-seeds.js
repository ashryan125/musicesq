const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "BLAH BLAH BLAH",
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text: "this music is trash!",
    user_id: 4,
    post_id: 3,
  },
  {
    comment_text: "favorite song!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "hell yea, great choice!",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "I disagree with your rating",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_text: "love it!",
    user_id: 4,
    post_id: 6,
  },
  {
    comment_text: ":)",
    user_id: 1,
    post_id: 5,
  },
  {
    comment_text: "yeeeeaaaaa",
    user_id: 4,
    post_id: 2,
  },
  {
    comment_text: "some comment text!",
    user_id: 1,
    post_id: 4,
  },
  {
    comment_text: "this is a comment",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "awful taste in music",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_text: "jamming out now",
    user_id: 2,
    post_id: 6,
  },
  {
    comment_text: "Perfect music to jam. Just beat it",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 5
  },
  {
    comment_text: 'Aliquam erat volutpat. In congue.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'Vivamus vestibulum sagittis sapien.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 6,
    post_id: 6
  },
  {
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Morbi a ipsum.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'Quisque porta volutpat erat.',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_text:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    user_id: 5,
    post_id: 6
  },
  {
    comment_text: 'Curabitur convallis.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
