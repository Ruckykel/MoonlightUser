import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default Home