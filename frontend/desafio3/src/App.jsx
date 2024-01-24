import { useState } from 'react';
import './App.css';

import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import Cards from '../components/CardModal/Cards';
import CarModal from '../components/CarModal/CarModal';
import FormModal from '../components/FormModal/FormModal.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CarModal />
      <Cards />
      <FormModal />
      <Footer />
    </>
  )
}

export default App
