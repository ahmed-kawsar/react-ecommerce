const ProductCard = ({ product }) => {
  return (
    <article key={product.slug} className='border-4 border-blue-200 rounded'>
      <img src={product.image} alt={product.name} className='md:w-64' />
      <div className='flex flex-col items-center p-3 gap-1'>
        <h4 className='font-bold text-lg'>{product.name}</h4>
        <p>
          Price <strong>${product.price}</strong>
        </p>
        <button className='bg-blue-500 px-3 rounded-sm text-white font-semibold hover:bg-blue-600'>
          add to cart
        </button>
      </div>
    </article>
  )
}
export default ProductCard
