const mongoose  = require('../config/mongo');

const Post = mongoose.model('Post',{
    title:string,
    body:string
});

module.exports = Post;