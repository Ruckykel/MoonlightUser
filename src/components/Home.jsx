import FAQ from './FAQ'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Producer from './Producer'
import ReadyToWatch from './ReadyToWatch'
import SignUp from './SignUp'
import Trending from './Trending'
const Home = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <Hero />
      <Trending/>
      <Producer/>
      <SignUp/>
      <FAQ/>
      <ReadyToWatch/>
      <Footer />
    </div>
  )
}

export default Home