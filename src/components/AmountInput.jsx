export default function AmountInput({ amount, setAmount }) {
  return (
    <input
      type="number"
      placeholder="Masukkan nominal"
      value={amount}
      onChange={e => setAmount(e.target.value)}
      style={{
        width: "100%",
        padding: "14px",
        borderRadius: "12px",
        marginTop: "14px",
        border: "none",
        outline: "none"
      }}
    />
  )
}