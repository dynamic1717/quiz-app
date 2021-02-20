import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { useRoutes } from './routes'

const App = () => {
  const routes = useRoutes()

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container' style={{ marginTop: '8%' }}>
        {routes}
      </div>
    </BrowserRouter>
  )
}

export default App
