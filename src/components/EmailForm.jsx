import { useState } from "react"
import axios from "axios"

export default function EmailForm() {
  const [message, setMessage] = useState("")

  const send = async () => {
    if (!message) return alert("Pesan kosong")

    await axios.post("/api/send-email", {
      message
    })

    alert("Pesan terkirim")
    setMessage("")
  }

  return (
    <div style={{marginTop:20}}>
      <textarea
        placeholder="Tulis pesan untuk tujuan..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        style={{
          width: "100%",
          height: 80,
          borderRadius: 12,
          padding: 10,
          border: "none",
          outline: "none"
        }}
      />
      <div className="method" onClick={send}>
        📧 Kirim Pesan
      </div>
    </div>
  )
}
