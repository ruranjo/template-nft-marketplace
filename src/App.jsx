import './App.css'
import Clients from './components/Clients'
import Home from './components/Home'
import CreateAndSell from './components/CreateAndSell'
import Choose from './components/Choose'

function App() {

  return (
    <>
      <div>
        <Home/>
        <Clients/>
        <CreateAndSell/>
        <Choose/>
      </div>
    </>
  )
}

export default App
