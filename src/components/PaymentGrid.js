import TiltCard from "./TiltCard"
import axios from "axios"

export default function PaymentGrid({ amount }) {
  const payQris = async () => {
    if (!amount) return alert("Masukkan nominal")

    const res = await axios.post("/api/create-transaction", {
      amount: Number(amount)
    })

    window.snap.pay(res.data.token)
  }

  return (
    <div className="payment-grid">
      <TiltCard icon="🔳" label="QRIS" onClick={payQris} />
      <TiltCard icon="🏦" label="BANK" onClick={() => alert("BCA Not a/n VIOS")} />
      <TiltCard icon="📱" label="DANA" onClick={() => alert("082133051495")} />
      <TiltCard icon="🟣" label="OVO" onClick={() => alert("082133051495")} />
      <TiltCard icon="🟢" label="GOPAY" onClick={() => alert("Not")} />
    </div>
  )
}
