import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
    } from "@/components/ui/card"
    type PropsJob = {
      title: string
      companyName: string
      locationType: string
      location: string
      salary: number
      type:string
    }
    
    const CardJob = ({title, companyName, locationType, location, salary, type}: PropsJob) => {
      return (
        <Card>
      <CardHeader>
        <CardTitle><div className=' flex justify-between items-center flex-wrap'><span>{title}</span><span className='text-lg font-normal'>{type}</span></div></CardTitle>
        <CardDescription>{companyName}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>{locationType}</div>
        <div>{location}</div>
        <div><div className=' flex justify-between items-center flex-wrap'><span>{salary}</span><span className='text-lg font-normal'>4 months ago</span></div></div>
      </CardContent>
      
    </Card>
    
      )
    }
    
    export default CardJob