import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
}, {
  timestamps: true,
})

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema)
