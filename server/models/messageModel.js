const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userPosting: {
        type: String
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId for userId
        ref: 'account', // Reference to the 'account' model assuming that's where users are stored
    },
    contact: {
        type: String
    },
    company: {
        type: String
    },
   
    date: {
        type: Date,
        default: Date.now
    },
    commentSection: [{
        comment: String,
        contact: String,
       
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

const Post = mongoose.model('post', PostSchema); // Use consistent naming (Post instead of Postings)
module.exports = Post;
