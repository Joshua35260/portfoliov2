import { Route, Routes, Link, NavLink, Outlet } from 'react-router-dom'
import Home from './screens/Home'
import Skills from './components/Skills'
import ProjectList from './components/ProjectList'

function App() {
  return (
    <>
      <Routes>
        {/* ROUTES APP */}
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
