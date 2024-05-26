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

const FormAddJob = () => {
  const ref = useRef<HTMLFormElement>(null)
  const createProduct = async (formData) => {}
  return (
    <div className=' w-full flex flex-col  justify-center items-center max-sm:justify-start  gap-4  '>
      <h1 className='text-2xl'>Add Job</h1>
      <form
        ref={ref}
        action={async (formData) => {
          await createProduct(formData)
          ref.current?.reset()
        }}
        className='w-full flex flex-col gap-4 '
      >
        <div className='flex flex-col gap-4'>
          <Label htmlFor='title'>Title</Label>
          <Input
            type='text'
            name='title'
            required
            className=''
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='description'>Description:</Label>
          <Input
            type='text'
            name='description'
            required
            className=''
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='price'>Price</Label>
          <Input
            type='number'
            name='price'
            required
            className=''
            step='0.01'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='price'>Image</Label>
          <Input
            type='text'
            name='img'
            required
          />
        </div>
        <div className='flex flex-col gap-4'>
          <Label htmlFor='category'>Category:</Label>
          <Select
            defaultValue=''
            name='category'
          >
            <SelectTrigger className=''>
              <SelectValue placeholder='Select a Category' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='Shoes'>Shoes</SelectItem>
              <SelectItem value='Clothes'>Clothes</SelectItem>
              <SelectItem value='Electronics'>Electronics</SelectItem>
              <SelectItem value='Furniture'>Furniture</SelectItem>
              <SelectItem value='Other'>Other</SelectItem>
            </SelectContent>
          </Select>
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