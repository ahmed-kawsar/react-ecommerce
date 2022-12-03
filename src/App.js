import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import data from './data'
import Cart from './screens/Cart'
import Home from './screens/Home'
import NoPage from './screens/NoPage'
import ProductScreen from './screens/ProductScreen'

export default function App() {
  const [products, setProducts] = useState(data.products)
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <Routes>
        <Route index element={<Home products={products} />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/product/:slug' element={<ProductScreen />} />
        <Route path='*' element={<NoPage />} />
      </Routes>

      <Footer />
    </div>
  )
}
