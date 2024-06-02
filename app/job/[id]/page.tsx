import connectToDb from '@/lib/connectToDb'
import { Jobs } from '@/lib/models'
import Link from 'next/link'
const JobId = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  await connectToDb()
  const jobId = await Jobs.find({ _id: id })

  return (
    <div className="min-h-[calc(100vh-64px)] w-full grid grid-cols-2 gap-12 max-lg:grid-cols-1 px-12 py-12 max-sm:px-4 max-sm:py-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold  max-sm:text-xl">
          <span className="desc">Job title:</span>
          {jobId[0].title}
        </h1>
        <div className="text-xl  max-sm:text-lg">
          <span className="desc">Company:</span>
          {jobId[0].companyName}
        </div>
        <div className="text-xl  max-sm:text-lg">
          <span className="desc">Location:</span>
          {jobId[0].location}
        </div>
        <div className="text-xl  max-sm:text-lg">
          <span className="desc">Location type:</span>
          {jobId[0].locationType}
        </div>
        <div className="text-xl  max-sm:text-lg">
          <span className="desc">Job type:</span>
          {jobId[0].type}
        </div>
        <div className="text-xl  max-sm:text-lg">
          <span className="desc">Salary:</span>${jobId[0].salary.toFixed(2)}
        </div>
        <div className="text-xl  max-sm:text-lg">
          <span className="desc">Email:</span>
          <a href="mailto:">{jobId[0].applicationEmail}</a>
        </div>
        <div className="text-xl  max-sm:text-lg">
          <span className="desc">Url:</span>
          <a href={jobId[0].applicationUrl}>{jobId[0].applicationUrl}</a>
        </div>
        <Link
          href={`/checkout?total=${jobId[0].salary}`}
          className="mt-4 bg-primary text-center  text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md "
        >
          Apply
        </Link>
      </div>
      <div>
        <span className="desc">Job description:</span>
        <p className="text-sm ">{jobId[0].description.slice(0, 1300)}.</p>
      </div>
    </div>
  )
}

export default JobId
