import './App.css'
import Clients from './components/Clients'
import Home from './components/Home'
import CreateAndSell from './components/CreateAndSell'
import Choose from './components/Choose'
import MarketPlace from './components/MarketPlace'

function App() {

  return (
    <>
      <div>
        <Home/>
        <Clients/>
        <CreateAndSell/>
        <Choose/>
        <MarketPlace/>
      </div>
    </>
  )
}

export default App
