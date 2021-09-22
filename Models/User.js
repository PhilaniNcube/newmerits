import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please enter first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please enter last name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter email'],
    unique: true,
  },
  mobile: {
    type: String,
    required: [true, 'Please enter your mobile number'],
  },
  grade: {
    type: Number,
    required: true,
    enum: [8, 9, 10, 11, 12],
  },
  subjects: {
    type: [String],
  },
  sports: {
    type: [String],
  },
  clubs: {
    type: [String],
  },
  role: {
    type: String,
    required: true,
    enum: ['student', 'teacher', 'admin', 'pending'],
    default: 'pending',
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'schools',
  },
});

export default mongoose.models.users || mongoose.model('users', UserSchema);
