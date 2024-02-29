import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer/Footer'
import Welcome from './components/Welcome/Welcome'

function App() {

  return (
    <>
      <Header />
      <Welcome fullname="John Smith" age={50} address="Vancouver" isDarkMode={false} isMobile={true} />
      <main>Hello world!</main>
      <Sidebar />
      <Footer />
    </>
  )
}

export default App
