import PaymentForm from '@/components/FormPayment'

const Payment = async ({
  searchParams,
}: {
  searchParams: { total: number }
}) => {
  const { total } = searchParams

  return (
    <>
      <PaymentForm total={total} />
    </>
  )
}
export default Payment
