import mongoose from 'mongoose'

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
  title: string
  type: string
}

const jobsSchema = new mongoose.Schema(
  {
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

export const Jobs = mongoose.models?.Jobs || mongoose.model('Jobs', jobsSchema)
