import { Button } from '@/components/ui/button'
import connectToDb from '@/lib/connectToDb'
import { Jobs } from '@/lib/models'
const JobId = async ({params}:{params: {id: string}}) => {
const {id} = params
  await connectToDb()
    const jobId = await Jobs.find({_id: id})
    console.log(jobId)

  return (
    <div className="min-h-[calc(100vh-64px)] w-full grid grid-cols-2 gap-12 max-lg:grid-cols-1 px-12 py-12 ">
       <div className="flex flex-col gap-2">
       <h1 className="text-2xl font-semibold"><span className="desc">Job title:</span>{jobId[0].title}</h1>
       <p className="text-xl "><span className="desc">Company:</span>{jobId[0].companyName}</p>   
       <p className="text-xl "><span className="desc">Location:</span>{jobId[0].location}</p>
       <p className="text-xl "><span className="desc">Location type:</span>{jobId[0].locationType}</p>
       <p className="text-xl "><span className="desc">Job type:</span>{jobId[0].type}</p>
       <p className="text-xl "><span className="desc">Salary:</span>${(jobId[0].salary).toFixed(2)}</p>
       <p className="text-xl "><span className="desc">Email:</span><a href="mailto:">{jobId[0].applicationEmail}</a></p>
       <p className="text-xl "><span className="desc">Url:</span><a href={jobId[0].applicationUrl}>{jobId[0].applicationUrl}</a></p>
       <Button className="mt-4 ">Apply</Button>
       </div>
       <div>
       <span className="desc">Job description:</span>
        <p className="text-sm ">{(jobId[0].description).slice(0, 1300)}.</p>
        </div> 
    </div>
  )
}

export default JobId