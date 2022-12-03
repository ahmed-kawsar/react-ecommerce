import ProductCard from '../components/ProductCard'

const Home = ({ products }) => {
  return (
    <main className='page'>
      <h1 className='text-3xl mb-4'>Featured Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3'>
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </main>
  )
}
export default Home
