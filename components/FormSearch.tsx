'use client'

import { useRef } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'

const FormSearch = () => {
  const router = useRouter()
  const ref = useRef<HTMLFormElement>(null)
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const title = e.target[0].value
    const type = e.target[2].value
    const location = e.target[3].value
    router.push(`/?title=${title}&type=${type}&location=${location}`)
    ref.current?.reset()
  }

  return (
    <div className=" w-full flex flex-col  justify-center items-center max-sm:justify-start  gap-4  ">
      <h1 className="text-2xl">Search Job</h1>
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 "
      >
        <div className="flex flex-col gap-4">
          <Label htmlFor="title">Job title</Label>
          <Input type="text" name="title" className="" />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="type">Job type:</Label>
          <Select defaultValue="" name="type">
            <SelectTrigger className="">
              <SelectValue placeholder="Select a Type Job" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Full-time">Full time</SelectItem>
              <SelectItem value="On site">Part time</SelectItem>
              <SelectItem value="Contract">Contract</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
              <SelectItem value="Temporary">Temporary</SelectItem>
              <SelectItem value="Volunteer">Volunteer</SelectItem>
              <SelectItem value="All">All</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-4">
          <Label htmlFor="location">Location</Label>
          <Input type="text" name="location" />
        </div>

        <Button type="submit" className="">
          Filter jobs
        </Button>
      </form>
    </div>
  )
}

export default FormSearch
