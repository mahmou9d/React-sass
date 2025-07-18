import './App.scss'
import Analytics from './Components/Analytics'
import DashboardPreview from './Components/DashboardPreview'
import Distribution from './Components/Distribution'
import Feature from './Components/Feature'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import STTop from './Components/STTop'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />

      <Distribution />
      <Footer/>
      <STTop />
    </div>
  );
}

export default App
