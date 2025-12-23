export default function TiltCard({ icon, label, onClick }) {
  const move = e => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18
    e.currentTarget.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`
  }

  return (
    <div
      className="tilt"
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={e => e.currentTarget.style.transform = "rotateX(0) rotateY(0)"}
      onTouchStart={() => {}}
    >
      <span>{icon}<br />{label}</span>
    </div>
  )
}
