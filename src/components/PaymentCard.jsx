import { useState } from "react"
import AmountInput from "./AmountInput"
import PaymentGrid from "./PaymentGrid"
import EmailForm from "./EmailForm"

export default function PaymentCard() {
  const [amount, setAmount] = useState("")

  return (
    <div style={{marginTop:18}}>
      <AmountInput amount={amount} setAmount={setAmount} />
      <PaymentGrid amount={amount} />
      <EmailForm />
    </div>
  )
}
