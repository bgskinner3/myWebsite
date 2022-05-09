const db = require('./db');
const {Post} = require('./models/Post');
const {Message} = require('./models/Message');
const {User} = require('./models/User');
const {Comment} = require('./models/Comment');
const {Referance} = require('./models/Reference');

Post.hasMany(Comment)
Comment.belongsTo(Post)

Post.hasMany(Referance)
Referance.belongsTo(Post)



module.exports = {
  db,
  Post,
  Message,
  Referance,
  Comment,
  User,
};
