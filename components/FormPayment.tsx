'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

const FormPayment = ({ total }: { total: number }) => {
  const router = useRouter()

  const notifySuccess = () => {
    toast.success(`Thank  you for your payment ${total} $!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    notifySuccess()
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  return (
    <div className=" w-full min-h-[calc(100vh-80px)]  flex flex-col justify-center max-sm:justify-start p-4 items-center  ">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="max-w-[480px] w-full   p-4  rounded-lg border-2 border-gray-400 "
      >
        <div className="w-100%">
          <Label htmlFor="cardNumber">To pay</Label>
          <Input type="text" value={total} required />
        </div>

        <div className="w-100%">
          <Label htmlFor="cardNumber">Card number</Label>
          <Input
            type="text"
            placeholder="1234 5678 9012 3456"
            required
            pattern="^(?:\d{4} ){3}\d{4}$"
          />
        </div>
        <div className="w-100% ">
          <Label htmlFor="expiryDate">Expiration date</Label>
          <Input
            type="text"
            placeholder="MM/YYYY"
            required
            pattern="^(0[1-9]|1[0-2])\/20[2-9][4-9]$"
          />
        </div>

        <div className="w-100%">
          <Label htmlFor="cvv">CVV</Label>
          <Input type="text" placeholder="123" required pattern="^[0-9]{3}$" />
        </div>

        <div className="w-full flex justify-end  mt-4">
          <Button type="submit">I pay by card</Button>
        </div>
      </form>
    </div>
  )
}

export default FormPayment
