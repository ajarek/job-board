'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from '@/components/ui/sheet'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

const MobileNav = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={36} />
      </SheetTrigger>
      <SheetContent
        side='left'
        className='border-none bg-card text-card-foreground  shadow-none lg:hidden'
      >
        <SheetHeader>
          <Link
            href='/'
            className='flex items-center gap-2 max-sm-gap-1'
          >
            <Image
              src='/images/job.jpg'
              width={30}
              height={32}
              alt='logo'
            />
            <h1 className='font-semibold text-xl text-primary'>Your Job</h1>
          </Link>
        </SheetHeader>
        <SheetClose asChild>
          <div className='flex h-full flex-col gap-6 pt-8 '>
            <SheetClose asChild>
              <Link
                href='/add-job'
                className={`flex items-center gap-4 hover:bg-primary hover:text-primary-foreground hover:rounded-sm  rounded-sm px-4 py-1 transition ${
                  pathname === '/add-job' ? 'active ' : 'px-4'
                }`}
              >
                Post a job
              </Link>
            </SheetClose>
          </div>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav