import axios from "axios"

export default function QrisButton({ amount }) {
  const pay = async () => {
    if (!amount) return alert("Masukkan nominal")

    const res = await axios.post("/api/create-transaction", {
      amount: Number(amount)
    })

    window.snap.pay(res.data.token, {
      onSuccess: () => window.location.href = "/success",
      onPending: () => alert("Menunggu pembayaran"),
      onError: () => alert("Pembayaran gagal")
    })
  }

  return (
    <div className="method" onClick={pay}>
      🔳 QRIS (Midtrans Auto)
    </div>
  )
}