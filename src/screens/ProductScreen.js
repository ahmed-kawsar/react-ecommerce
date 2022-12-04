import { Link, useParams } from 'react-router-dom'
import { GrReturn } from 'react-icons/gr'

const ProductScreen = ({ products }) => {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  return (
    <main className='page p-4'>
      <Link to='/'>
        <div className='flex items-center gap-2 my-4'>
          <GrReturn /> Back To Home
        </div>
      </Link>

      <div className='grid md:grid-cols-5'>
        <div className='col-span-3'>
          <img src={product.image} alt={product.name} className='w-full' />
        </div>
        <div className='col-span-1 pl-4'>
          <h2 className='text-2xl'>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>
            Rating: {product.rating} of {product.numReviews}
          </p>
          <p>Description: {product.description}</p>
        </div>
        <div className='border h-1/5 p-2 shadow-md grid'>
          <div className='flex justify-between'>
            <p>Price</p>
            <p>{product.price}</p>
          </div>
          <div className='flex justify-between'>
            <p>Status</p>
            <p>{product.countInStock < 1 ? 'Out Of Stock' : 'InStock'}</p>
          </div>
          <button className='primary-btn'>Add to Cart</button>
        </div>
      </div>
    </main>
  )
}
export default ProductScreen
