'use client'

import { useRef } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from '@/components/ui/label'
import TextAreaComponent from '@/components/Editor'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


const FormAddJob = () => {
  const ref = useRef<HTMLFormElement>(null)
  const addJob = async (formData) => {}
  return (
    <div className=' w-full flex flex-col  justify-center items-center max-sm:justify-start  gap-4  '>
      <h1 className='text-2xl'>Add Job</h1>
      <form
        ref={ref}
        action={async (formData) => {
          await addJob(formData)
          ref.current?.reset()
        }}
        className='w-full flex flex-col gap-4 '
      >
        <div className='flex flex-col gap-4'>
          <Label htmlFor='title'>Job title</Label>
          <Input
            type='text'
            name='title'
            required
            className=''
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='type'>Job type:</Label>
          <Select
            defaultValue=''
            name='type'
          >
            <SelectTrigger className=''>
              <SelectValue placeholder='Select a Type Job' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Full-time'>Full time</SelectItem>
              <SelectItem value='On site'>Part time</SelectItem>
              <SelectItem value='Contract'>Contract</SelectItem>
              <SelectItem value='Internship'>Internship</SelectItem>
              <SelectItem value='Temporary'>Temporary</SelectItem>
              <SelectItem value='Volunteer'>Volunteer</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='companyName'>Company:</Label>
          <Input
            type='text'
            name='companyName'
            required
            className=''
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='locationType'>Job type:</Label>
          <Select
            defaultValue=''
            name='locationType'
          >
            <SelectTrigger className=''>
              <SelectValue placeholder='Select a Location Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Remote'>Remote</SelectItem>
              <SelectItem value='On site'>On site</SelectItem>
              <SelectItem value='Hybrid'>Hybrid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='location'>Location</Label>
          <Input
            type='text'
            name='location'
            required
          />
        </div>
        <div className='flex flex-row items-center gap-4 mt-4'>
          <Label htmlFor='applicationEmail'>Apply Email</Label>
          <Input
            type='text'
            name='applicationEmail'
            required
          />
          <span>or</span>
          <Label htmlFor='applicationUrl'>Apply Url</Label>
          <Input
            type='text'
            name='applicationUrl'
            required
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='salary'>Salary</Label>
          <Input
            type='text'
            name='salary'
            required
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='description'>Description</Label>
          
          <TextAreaComponent/>
        </div>
        

        <Button
          type='submit'
          className=''
        >
          Add Record
        </Button>
      </form>
    </div>
  )
}

export default FormAddJob