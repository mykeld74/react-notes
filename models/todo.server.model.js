import mongoose from 'mongoose';
var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  todoDesc: String,
  todoText: String
});
export default mongoose.model('Todo', Schema);