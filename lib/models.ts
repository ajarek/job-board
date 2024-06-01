import mongoose from 'mongoose'

export type User = {
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}
export type Jobs = {
  _id?: string
  applicationEmail: string
  applicationUrl: string
  approved: boolean
  companyName: string
  description?: string
  location: string
  locationType: string
  salary: number
  slug: string
  title:string
  type: string
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const jobsSchema =new mongoose.Schema({
  applicationEmail: { type: String, required: true },
  applicationUrl: { type: String },
  approved: { type: Boolean, default: false },
  companyName: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  locationType: { type: String, required: true },
  salary: { type: Number, required: true },
  slug: { type: String },
  title: { type: String, required: true },
  type: { type: String, required: true },
},
  { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Jobs = mongoose.models?.Jobs || mongoose.model('Jobs', jobsSchema)
