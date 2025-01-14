import { useState } from 'react'
import './App.css'
import UseEffect from './components/useEffect/UseEffect'
import UseState from './components/useState/UseState'

function App() {

  const [option, setOption] = useState<null | string>(null)

  return (
    <>
      <section >
        <aside >
          <button onClick={() => setOption('state')}>useState</button>
          <button onClick={() => setOption('effect')}>useEffect</button>
        </aside>

        <main>
          {option === 'state' && <UseState />}
          {option === 'effect' && <UseEffect />}
        </main>

      </section>
    </>
  )
}

export default App
