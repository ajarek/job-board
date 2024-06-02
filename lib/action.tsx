'use server'

import connectToDb from './connectToDb'
import { Jobs } from './models'
import { revalidatePath } from 'next/cache'

export const createJob = async (formData: FormData) => {
  const rawFormData = {
    applicationEmail: formData.get('applicationEmail'),
    applicationUrl: formData.get('applicationUrl'),
    approved: formData.get('approved'),
    companyName: formData.get('companyName'),
    description: formData.get('description'),
    location: formData.get('location'),
    locationType: formData.get('locationType'),
    salary: formData.get('salary'),
    slug: formData.get('slug'),
    title: formData.get('title'),
    type: formData.get('type'),
  }
  console.log('rawFormData' + rawFormData)
  try {
    await connectToDb()
    const newJob = new Jobs(rawFormData)
    await newJob.save()
    console.log('saved' + newJob)
    revalidatePath('/dashboard')
  } catch (err) {
    console.log(err)
  }
}
