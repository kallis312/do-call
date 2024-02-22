import Loading from '@components/common/Loading'
import { Suspense, lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.scss'

const Login = lazy(() => import('@pages/Login'))
const Home = lazy(() => import('@pages/Home'))

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Outlet />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
