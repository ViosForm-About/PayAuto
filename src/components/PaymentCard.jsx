import { useState } from "react"
import AmountInput from "./AmountInput"
import QrisButton from "./QrisButton"

export default function PaymentCard() {
  const [amount, setAmount] = useState("")

  return (
    <div style={{marginTop:20}}>
      <AmountInput amount={amount} setAmount={setAmount} />
      <QrisButton amount={amount} />

      <div className="method">🏦 BCA Kosong a/n VIOS</div>
      <div className="method">📱 Dana 082133051495</div>
      <div className="method">🟣 OVO 082133051495</div>
      <div className="method">🟢 GoPay Kosong</div>
    </div>
  )
}