import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Post name is required'],
  },

  prompt: {
    type: String,
    required: [true, 'Post prompt is required'],
  },

  photo: {
    type: String,
    required: [true, 'Post photo is required'],
  },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
