import { Link, useParams } from 'react-router-dom'
import { GrReturn } from 'react-icons/gr'

const ProductScreen = ({ products }) => {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  return (
    <main className='page container'>
      <Link to='/'>
        <div className='flex items-center gap-2 my-4'>
          <GrReturn /> Back To Home
        </div>
      </Link>

      <div className='grid md:grid-cols-5 p-4'>
        <div className='col-span-3 ml-5'>
          <img src={product.image} alt={product.name} className='w-full' />
        </div>
        <div className='col-span-2 pl-4 ml-6 flex flex-col gap-3'>
          <h2 className='text-2xl'>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>
            Rating: {product.rating} of {product.numReviews}
          </p>
          <p>Description: {product.description}</p>
          <div>
            <p>
              Price: <strong>${product.price}</strong>
            </p>
            <p>Status{product.countInStock < 1 ? 'Out Of Stock' : 'InStock'}</p>
          </div>
          <button className='primary-btn w-32'>Add to Cart</button>
        </div>
      </div>
    </main>
  )
}
export default ProductScreen
