import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, requered: true },
});

export default mongoose.model('User', UserSchema);
