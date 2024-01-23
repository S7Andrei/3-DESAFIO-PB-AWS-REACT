import { useState } from 'react'
import './App.css'

import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import Cards from '../components/CardModal/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Cards />
      <Footer />
    </>
  )
}

export default App
