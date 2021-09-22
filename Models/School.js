import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this school.'],
  },
  streetAddress: {
    type: String,
    required: [true, 'Please provide a street address.'],
  },
  city: {
    type: String,
    required: [true, 'Please provide a city/town.'],
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'coed'],
    required: [true, 'Please state the gender of students.'],
  },
  type: {
    type: String,
    required: [true, 'Please please choose type of school.'],
  },
  province: {
    type: String,
    required: [true, 'Please please choose the province.'],
  },
  country: {
    type: String,
    default: 'South Africa',
    required: [true, 'Please please choose the country.'],
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  ],
});

export default mongoose.models.schools ||
  mongoose.model('schools', SchoolSchema);
