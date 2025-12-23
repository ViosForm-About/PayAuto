import Header from "./components/Header"
import PaymentCard from "./components/PaymentCard"

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <PaymentCard />
      </div>
    </div>
  )
}