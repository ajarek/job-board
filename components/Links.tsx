'use client'

import Image from 'next/image'
import Link from 'next/link'

const Links = () => {
  return (
    <div className='max-lg:hidden w-full flex items-center justify-between  '>
      <Link
        href='/'
        className='flex items-center gap-2 max-sm-gap-1'
      >
        <Image
          src='https://github.com/ajarek/next-14-ep-43-job-board/blob/main/public/images/job.jpg?raw=true'
          width={30}
          height={32}
          alt='logo'
        />
        <h1 className='font-semibold text-xl '>Your Job</h1>
      </Link>

      <Link
        href='/add-job'
        className={`flex items-center gap-4 bg-primary text-primary-foreground hover:bg-primary/80 rounded-sm px-4 py-1 transition`}
      >
        Post a job
      </Link>
    </div>
  )
}

export default Links