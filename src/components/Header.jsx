import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}>
      <img src="/avatar.png" className="avatar" />
      <h2 style={{marginTop:12}}>VIOS ALL PAY</h2>
      <p style={{opacity:.7}}>All Payment System</p>
    </motion.div>
  )
}