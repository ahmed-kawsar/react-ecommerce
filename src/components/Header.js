import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='bg-blue-600 text-white px-5 py-2 flex items-center justify-between container shadow'>
      <Link to='/'>
        <h2 className='text-2xl font-semibold'>Ecommerce</h2>
      </Link>
      <Navbar />
    </header>
  )
}
export default Header
