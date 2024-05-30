import connectToDb from '@/lib/connectToDb'
import { Jobs } from '@/lib/models'
import CardJob from '@/components/CardJob'

export default async function Home() {
  await connectToDb()
   const placeholderJobs = await Jobs.find({})
  return (
    <main className='flex min-h-screen flex-col items-center justify-start px-24 py-12 max-lg:px-4'>
      <h1 className='text-5xl font-bold'>All developer jobs</h1>
      <p className='text-xl'>Find your dream job</p>
      <div className='w-full grid grid-cols-3 mt-4 gap-4 max-lg:grid-cols-1'>
        <div className='col-start-1 col-end-2 px-4 '>Form</div>
        <div className='col-start-2 col-end-4 max-lg:col-start-1 max-lg:col-end-2 '>
          {placeholderJobs.map((job) => (
            <div key={job.title}>
              <CardJob
                title={job.title}
                companyName={job.companyName}
                locationType={job.locationType}
                location={job.location ||''}
                salary={job.salary}
                type={job.type}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}