import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <article
      key={product.slug}
      className='border border-blue-200 shadow rounded'
    >
      <Link to={`product/${product.slug}`}>
        <img src={product.image} alt={product.name} className='md:w-64' />
      </Link>
      <div className='flex flex-col items-center p-3 gap-1'>
        <h4 className='font-bold text-lg'>{product.name}</h4>
        <p>
          Price <strong>${product.price}</strong>
        </p>
        <button className='primary-btn'>add to cart</button>
      </div>
    </article>
  )
}
export default ProductCard
